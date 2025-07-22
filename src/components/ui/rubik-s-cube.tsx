import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import {
  PerspectiveCamera,
  SpotLight,
  RoundedBox,
  useDepthBuffer,
  CameraControls,
} from "@react-three/drei";
import * as THREE from 'three';
import React, { Suspense, useRef, useState, useEffect, forwardRef, useMemo, useCallback } from "react";
import { Vector3, Matrix4, Group } from "three";

// Extend THREE namespace to make CameraControls available declaratively
extend({ CameraControls });

function CameraController() {
  const { camera, gl } = useThree();
  const controlsRef = useRef<CameraControls>(null!);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.setLookAt(0, 0, 7, 0, 0, 0, true);
    }
  }, []);

  useFrame((_state, delta) => {
    controlsRef.current?.update(delta);
  });

  return <CameraControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

function EnhancedSpotlight(props: EnhancedSpotlightProps) {
  const light = useRef<THREE.SpotLight>(null!); // Corrected type
  const { scene } = useThree();

  useMemo(() => {
    if (light.current) {
      light.current.target = new THREE.Object3D();
      scene.add(light.current.target);
    }
  }, [scene]);

  useFrame(() => {
    if (light.current && light.current.target) {
      light.current.target.position.set(0, 0, 0);
      light.current.target.updateMatrixWorld();
    }
  }, []);

  return (
    <>
      <SpotLight 
        ref={light} 
        {...props} 
      />
    </>
  );
}

function SceneContent() {
  const depthBuffer = useDepthBuffer({
    size: 2048,
    frames: 1,
    disableRenderLoop: true
  });

  const [_time, setTime] = useState(0);
  useFrame((state) => {
    setTime(state.clock.getElapsedTime());
  });

  return (
    <>
      <EnhancedSpotlight 
        depthBuffer={depthBuffer} 
        color="#aaaace" 
        position={[3, 3, 2]}
        volumetric={true}
        opacity={1}
        penumbra={1}
        distance={17}
        angle={0.8}
        attenuation={30}
        anglePower={6}
        intensity={1}
        shadowMapSize={2048}
        shadowBias={-0.0001}
        shadow-autoUpdate={false}
        castShadow
      />
      <RubiksCubeModel position={[0, 0, 0]} scale={1} />
    </>
  );
}

function Scene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'rgba(0,0,0,0.7)' }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          <CameraController />
          <ambientLight intensity={0.5} />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Type definitions
interface Cube {
  position: THREE.Vector3;
  rotationMatrix: THREE.Matrix4;
  id: string;
  originalCoords: { x: number; y: number; z: number; };
  x: number; y: number; z: number;
}

interface DeviceSettings {
  smoothness: number;
  castShadow: boolean;
  receiveShadow: boolean;
}

interface Move {
  axis: 'x' | 'y' | 'z';
  layer: number;
  direction: number;
  rotationAngle: number;
}

interface RubiksCubeModelProps {
  position: [number, number, number];
  scale: number;
}

interface EnhancedSpotlightProps {
  depthBuffer: any;
  color: string;
  position: [number, number, number];
  volumetric: boolean;
  opacity: number;
  penumbra: number;
  distance: number;
  angle: number;
  attenuation: number;
  anglePower: number;
  intensity: number;
  shadowMapSize: number;
  shadowBias: number;
  'shadow-autoUpdate': boolean;
  castShadow: boolean;
}

const RubiksCubeModel = forwardRef<Group, RubiksCubeModelProps>((props, ref) => {
  const ANIMATION_DURATION = 1.2;
  const RADIUS = 0.075;
  const size = 1;
  const mainGroupRef = useRef<Group>(null!);
  const [cubes, setCubes] = useState<Cube[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [deviceSettings, setDeviceSettings] = useState<DeviceSettings>({ smoothness: 4, castShadow: true, receiveShadow: true });

  const isAnimatingRef = useRef(false);
  const currentMoveRef = useRef<Move | null>(null);
  const currentRotationRef = useRef(0);
  const reusableMatrix4 = useMemo(() => new Matrix4(), []);

  useEffect(() => {
    const initialCubes: Cube[] = [];
    let id = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          if (x === 0 && y === 0 && z === 0) continue;
          initialCubes.push({
            position: new Vector3(x, y, z),
            rotationMatrix: new Matrix4(),
            id: `cube-${id++}`,
            originalCoords: { x, y, z },
            x, y, z
          });
        }
      }
    }
    setCubes(initialCubes);
    setIsVisible(true);
  }, []);

  const randomMove = useCallback(() => {
    if (isAnimatingRef.current) return;
    const axes: ('x' | 'y' | 'z')[] = ['x', 'y', 'z'];
    const axis = axes[Math.floor(Math.random() * 3)];
    const layer = Math.floor(Math.random() * 3) - 1;
    const direction = Math.random() < 0.5 ? 1 : -1;
    startRotation(axis, layer, direction);
  }, []);

  const throttle = <T extends (...args: any[]) => void>(func: T, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: Parameters<T>) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  const throttledRandomMove = useMemo(() => throttle(randomMove, 2000), [randomMove]);

  const getRotationMatrix = (axis: 'x' | 'y' | 'z', angle: number): THREE.Matrix4 => {
    const matrix = new Matrix4();
    if (axis === 'x') matrix.makeRotationX(angle);
    if (axis === 'y') matrix.makeRotationY(angle);
    if (axis === 'z') matrix.makeRotationZ(angle);
    return matrix;
  };

  const startRotation = (axis: 'x' | 'y' | 'z', layer: number, direction: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    currentMoveRef.current = { axis, layer, direction, rotationAngle: (Math.PI / 2) * direction };
    currentRotationRef.current = 0;
    requestAnimationFrame(animateRotation);
  };

  const animateRotation = () => {
    if (!currentMoveRef.current) return;
    const elapsedTime = 16; // approx ms per frame
    const rotationAmount = (elapsedTime / (ANIMATION_DURATION * 1000)) * currentMoveRef.current.rotationAngle;
    currentRotationRef.current += rotationAmount;

    if (Math.abs(currentRotationRef.current) >= Math.abs(currentMoveRef.current.rotationAngle)) {
      finalizeRotation();
    } else {
      const stepRotationMatrix = getRotationMatrix(currentMoveRef.current.axis, rotationAmount);
      updateCubePositions(currentMoveRef.current, stepRotationMatrix);
      requestAnimationFrame(animateRotation);
    }
  };

  const updateCubePositions = (move: Move, stepRotationMatrix: THREE.Matrix4) => {
    setCubes((prevCubes: Cube[]) => {
      return prevCubes.map((cube: Cube) => {
        if (Math.round(cube.position[move.axis]) === move.layer) {
          const newRotationMatrix = reusableMatrix4.clone().multiplyMatrices(stepRotationMatrix, cube.rotationMatrix);
          return { ...cube, rotationMatrix: newRotationMatrix };
        }
        return cube;
      });
    });
  };

  const finalizeRotation = () => {
    if (!currentMoveRef.current) { return; }
    const move = currentMoveRef.current;
    const finalRotationMatrix = getRotationMatrix(move.axis, (Math.PI / 2) * move.direction);
    setCubes((prevCubes: Cube[]) => {
      const newCubes = prevCubes.map((cube: Cube) => {
        if (Math.round(cube.position[move.axis]) === move.layer) {
          const newPosition = cube.position.clone().applyMatrix4(finalRotationMatrix);
          return { ...cube, position: newPosition, rotationMatrix: new Matrix4().identity() };
        }
        return cube;
      });
      return newCubes.map(c => ({ ...c, rotationMatrix: new Matrix4().identity() }));
    });
    currentRotationRef.current = 0;
    isAnimatingRef.current = false;
    currentMoveRef.current = null;
  };

  useFrame((_state, delta) => {
    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.y += delta * 0.1;
      mainGroupRef.current.rotation.x += delta * 0.05;
    }
    if (!isAnimatingRef.current) {
      throttledRandomMove();
    }
  });

  return (
    <group ref={mainGroupRef} {...props} visible={isVisible}>
      {cubes.map((cube: Cube) => (
        <RoundedBox
          key={cube.id}
          args={[size, size, size]}
          radius={RADIUS}
          smoothness={deviceSettings.smoothness}
          castShadow={deviceSettings.castShadow}
          receiveShadow={deviceSettings.receiveShadow}
          position={cube.position}
          matrix={cube.rotationMatrix}
          matrixAutoUpdate={false}
        >
          <meshStandardMaterial color="#ffffff" emissive="#111111" roughness={0.2} metalness={0.8} />
        </RoundedBox>
      ))}
    </group>
  );
});

export default Scene;
