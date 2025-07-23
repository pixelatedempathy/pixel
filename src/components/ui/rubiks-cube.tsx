import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";

import {
  CameraControls,
  RoundedBox,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";
import type { SpotLightProps } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect, forwardRef, useCallback } from "react";
import { Vector3, Matrix4, Group, Object3D, SpotLight as SpotLightImpl } from "three";

// Type Definitions
interface Cube {
  id: number;
  position: Vector3;
  rotationMatrix: Matrix4;
}

interface Move {
  axis: 'x' | 'y' | 'z';
  layer: -1 | 0 | 1;
  direction: 1 | -1;
}

interface RubiksCubeModelProps {
  position: [number, number, number];
  scale: number;
}

// Extend THREE namespace to make CameraControls available declaratively
// Note: CameraControls is already a part of @react-three/drei, so manual extension is not always necessary
// depending on the version, but it's safe to keep for compatibility.
extend({ CameraControls });

// Constants
const CUBE_SIZE = 1;
const PADDING = 0.1;
const RADIUS = 0.1;
const size = CUBE_SIZE - PADDING;

const deviceSettings = {
  castShadow: true,
  receiveShadow: true,
  smoothness: 4,
};

// Reusable Three.js objects to avoid creating new ones in the render loop
const reusableMatrix4 = new Matrix4();

// Helper Functions
const createInitialCubes = (): Cube[] => {
  const cubes: Cube[] = [];
  let id = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push({
          id: id++,
          position: new Vector3(x, y, z),
          rotationMatrix: new Matrix4().identity(),
        });
      }
    }
  }
  return cubes;
};

const getRotationMatrix = (axis: 'x' | 'y' | 'z', angle: number): Matrix4 => {
  const matrix = new Matrix4();
  switch (axis) {
    case 'x': return matrix.makeRotationX(angle);
    case 'y': return matrix.makeRotationY(angle);
    case 'z': return matrix.makeRotationZ(angle);
    default: throw new Error('Invalid axis');
  }
};

// Components
function CameraController() {
  const { camera, gl } = useThree();
  const controlsRef = useRef<CameraControls | null>(null);

  useEffect(() => {
    controlsRef.current?.setLookAt(0, 0, 7, 0, 0, 0, true);
  }, []);

  useFrame((_state, delta) => {
    controlsRef.current?.update(delta);
  });

  return <CameraControls ref={controlsRef} args={[camera, gl.domElement]} />;
}

function EnhancedSpotlight(props: SpotLightProps) {
  const light = useRef<SpotLightImpl>(null!);
  const { scene } = useThree();

  useEffect(() => {
    if (light.current) {
      const target = new Object3D();
      light.current.target = target;
      scene.add(target);
      return () => {
        scene.remove(target);
      };
    }
  }, [scene]);

  useFrame(() => {
    if (light.current?.target) {
      light.current.target.position.set(0, 0, 0);
      light.current.target.updateMatrixWorld();
    }
  });

  return <SpotLight ref={light} {...props} />;
}

function SceneContent() {
  return (
    <>
      <EnhancedSpotlight 
        color="#aaaace" 
        position={[3, 3, 2]}
        penumbra={1}
        distance={17}
        angle={0.8}
        attenuation={30}
        anglePower={6}
        intensity={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
        castShadow
      />
      <RubiksCubeModel position={[0, 0, 0]} scale={1} />
    </>
  );
}

const RubiksCubeModel = forwardRef<Group, RubiksCubeModelProps>((props, ref) => {
  const [cubes, setCubes] = useState<Cube[]>(createInitialCubes);
  const isAnimatingRef = useRef(false);
  const animationQueueRef = useRef<Move[]>([]);

  const finalizeRotation = useCallback((move: Move) => {
    const finalRotationMatrix = getRotationMatrix(move.axis, (Math.PI / 2) * move.direction);
    setCubes(prevCubes => {
      const newCubes = prevCubes.map(cube => {
        if (Math.round(cube.position[move.axis as keyof Vector3]) === move.layer) {
          const newPosition = cube.position.clone().applyMatrix4(finalRotationMatrix);
          return { ...cube, position: newPosition, rotationMatrix: new Matrix4().identity() };
        }
        return cube;
      });
      return newCubes.map(c => ({ ...c, rotationMatrix: new Matrix4().identity() }));
    });

    isAnimatingRef.current = false;
    const nextMove = animationQueueRef.current.shift();
    if (nextMove) {
      startRotation(nextMove);
    }
  }, [startRotation]);

  const startRotation = useCallback((move: Move) => {
    if (isAnimatingRef.current) {
      animationQueueRef.current.push(move);
      return;
    }
    isAnimatingRef.current = true;

    let currentRotation = 0;
    const rotationSpeed = 0.05;
    const targetRotation = Math.PI / 2;

    const animate = () => {
      currentRotation += rotationSpeed;
      const isFinished = currentRotation >= targetRotation;
      const rotationAmount = isFinished ? targetRotation - (currentRotation - rotationSpeed) : rotationSpeed;
      const stepRotationMatrix = getRotationMatrix(move.axis, rotationAmount * move.direction);

      setCubes(prevCubes =>
        prevCubes.map(cube => {
          if (Math.round(cube.position[move.axis as keyof Vector3]) === move.layer) {
            const newRotationMatrix = reusableMatrix4.clone().multiplyMatrices(stepRotationMatrix, cube.rotationMatrix);
            return { ...cube, rotationMatrix: newRotationMatrix };
          }
          return cube;
        })
      );

      if (isFinished) {
        finalizeRotation(move);
      } else {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [finalizeRotation]);

  const randomMove = useCallback(() => {
    if (isAnimatingRef.current) {
      return;
    }
    const moves: Move[] = [
      { axis: 'x', layer: -1, direction: 1 }, { axis: 'x', layer: 0, direction: 1 }, { axis: 'x', layer: 1, direction: 1 },
      { axis: 'y', layer: -1, direction: 1 }, { axis: 'y', layer: 0, direction: 1 }, { axis: 'y', layer: 1, direction: 1 },
      { axis: 'z', layer: -1, direction: 1 }, { axis: 'z', layer: 0, direction: 1 }, { axis: 'z', layer: 1, direction: 1 },
    ];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    startRotation(randomMove);
  }, [startRotation]);

  useEffect(() => {
    const interval = setInterval(randomMove, 2000);
    return () => clearInterval(interval);
  }, [randomMove]);

  useFrame((_state, delta) => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={ref} {...props}>
      {cubes.map((cube: Cube) => (
        <group
          key={cube.id}
          position={cube.position}
          matrix={cube.rotationMatrix}
          matrixAutoUpdate={false}
        >
          <RoundedBox
            args={[size, size, size]}
            radius={RADIUS}
            smoothness={deviceSettings.smoothness}
            castShadow
            receiveShadow
          >
            <meshStandardMaterial
              color="#ffffff"
              emissive="#111111"
              roughness={0.2}
              metalness={0.8}
            />
          </RoundedBox>
        </group>
      ))}
    </group>
  );
});

function Scene() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Don't render on the server
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 9999, background: 'rgba(0,0,0,0.7)' }}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={35} />
          <CameraController />
          <ambientLight />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
