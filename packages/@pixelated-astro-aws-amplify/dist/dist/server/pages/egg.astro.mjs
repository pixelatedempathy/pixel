;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="c0986777-8240-4e8c-9aae-3bfa3fe71d1f",e._sentryDebugIdIdentifier="sentry-dbid-c0986777-8240-4e8c-9aae-3bfa3fe71d1f")}catch(e){}}();/* empty css                                          */
/* empty css                                 */
import '../chunks/sentry.server.config_CxC0uPLd.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Ck5BzePu.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BKh1dVJn.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useFrame, Canvas, useThree } from '@react-three/fiber';
import { RoundedBox, PerspectiveCamera, OrbitControls, SpotLight } from '@react-three/drei';
import { forwardRef, useState, useRef, useCallback, useEffect, Suspense } from 'react';
import { Matrix4, Vector3, Object3D } from 'three';
export { renderers } from '../renderers.mjs';

const CUBE_SIZE = 1;
const PADDING = 0.1;
const RADIUS = 0.1;
const size = CUBE_SIZE - PADDING;
const deviceSettings = {
  smoothness: 4
};
const reusableMatrix4 = new Matrix4();
const createInitialCubes = () => {
  const cubes = [];
  let id = 0;
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        cubes.push({
          id: id++,
          position: new Vector3(x, y, z),
          rotationMatrix: new Matrix4().identity()
        });
      }
    }
  }
  return cubes;
};
const getRotationMatrix = (axis, angle) => {
  const matrix = new Matrix4();
  switch (axis) {
    case "x":
      return matrix.makeRotationX(angle);
    case "y":
      return matrix.makeRotationY(angle);
    case "z":
      return matrix.makeRotationZ(angle);
    default:
      throw new Error("Invalid axis");
  }
};
function CameraController() {
  return /* @__PURE__ */ jsx(
    OrbitControls,
    {
      enableZoom: true,
      enablePan: true,
      enableRotate: true,
      target: [0, 0, 0]
    }
  );
}
function EnhancedSpotlight(props) {
  const light = useRef(null);
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
    return void 0;
  }, [scene]);
  useFrame(() => {
    if (light.current?.target) {
      light.current.target.position.set(0, 0, 0);
      light.current.target.updateMatrixWorld();
    }
  });
  return /* @__PURE__ */ jsx(SpotLight, { ref: light, ...props });
}
function SceneContent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      EnhancedSpotlight,
      {
        color: "#aaaace",
        position: [3, 3, 2],
        penumbra: 1,
        distance: 17,
        angle: 0.8,
        attenuation: 30,
        anglePower: 6,
        intensity: 1,
        "shadow-mapSize-width": 2048,
        "shadow-mapSize-height": 2048,
        "shadow-bias": -1e-4,
        castShadow: true
      }
    ),
    /* @__PURE__ */ jsx(RubiksCubeModel, { position: [0, 0, 0], scale: 1 })
  ] });
}
const RubiksCubeModel = forwardRef((props, ref) => {
  const [cubes, setCubes] = useState(createInitialCubes);
  const isAnimatingRef = useRef(false);
  const animationQueueRef = useRef([]);
  const finalizeRotationRef = useRef(() => {
  });
  const startRotation = useCallback((move) => {
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
      setCubes(
        (prevCubes) => prevCubes.map((cube) => {
          let posValue;
          if (move.axis === "x") {
            posValue = cube.position.x;
          } else if (move.axis === "y") {
            posValue = cube.position.y;
          } else {
            posValue = cube.position.z;
          }
          if (Math.round(posValue) === move.layer) {
            const newRotationMatrix = reusableMatrix4.clone().multiplyMatrices(stepRotationMatrix, cube.rotationMatrix);
            return { ...cube, rotationMatrix: newRotationMatrix };
          }
          return cube;
        })
      );
      if (isFinished && finalizeRotationRef.current) {
        finalizeRotationRef.current(move);
      } else if (!isFinished) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, []);
  useEffect(() => {
    finalizeRotationRef.current = (move) => {
      const finalRotationMatrix = getRotationMatrix(move.axis, Math.PI / 2 * move.direction);
      setCubes((prevCubes) => {
        const newCubes = prevCubes.map((cube) => {
          let posValue;
          if (move.axis === "x") {
            posValue = cube.position.x;
          } else if (move.axis === "y") {
            posValue = cube.position.y;
          } else {
            posValue = cube.position.z;
          }
          if (Math.round(posValue) === move.layer) {
            const newPosition = cube.position.clone().applyMatrix4(finalRotationMatrix);
            return { ...cube, position: newPosition, rotationMatrix: new Matrix4().identity() };
          }
          return cube;
        });
        return newCubes.map((c) => ({ ...c, rotationMatrix: new Matrix4().identity() }));
      });
      isAnimatingRef.current = false;
      const nextMove = animationQueueRef.current.shift();
      if (nextMove) {
        startRotation(nextMove);
      }
    };
  }, [startRotation]);
  const randomMove = useCallback(() => {
    if (isAnimatingRef.current) {
      return;
    }
    const moves = [
      { axis: "x", layer: -1, direction: 1 },
      { axis: "x", layer: 0, direction: 1 },
      { axis: "x", layer: 1, direction: 1 },
      { axis: "y", layer: -1, direction: 1 },
      { axis: "y", layer: 0, direction: 1 },
      { axis: "y", layer: 1, direction: 1 },
      { axis: "z", layer: -1, direction: 1 },
      { axis: "z", layer: 0, direction: 1 },
      { axis: "z", layer: 1, direction: 1 }
    ];
    const randomMove2 = moves[Math.floor(Math.random() * moves.length)];
    if (randomMove2) {
      startRotation(randomMove2);
    }
  }, [startRotation]);
  useEffect(() => {
    const interval = setInterval(randomMove, 2e3);
    return () => clearInterval(interval);
  }, [randomMove]);
  useFrame((_state, delta) => {
    if (ref && "current" in ref && ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x += delta * 0.05;
    }
  });
  return /* @__PURE__ */ jsx("group", { ref, ...props, children: cubes.map((cube) => /* @__PURE__ */ jsx(
    "group",
    {
      position: [cube.position.x, cube.position.y, cube.position.z],
      matrixAutoUpdate: false,
      children: /* @__PURE__ */ jsx(
        RoundedBox,
        {
          args: [size, size, size],
          radius: RADIUS,
          smoothness: deviceSettings.smoothness,
          castShadow: true,
          receiveShadow: true,
          children: /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: "#ffffff",
              emissive: "#111111",
              roughness: 0.2,
              metalness: 0.8
            }
          )
        }
      )
    },
    cube.id
  )) });
});
RubiksCubeModel.displayName = "RubiksCubeModel";
function Scene() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { style: { width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, zIndex: 9999, background: "rgba(0,0,0,0.7)" }, children: /* @__PURE__ */ jsx(Canvas, { shadows: true, children: /* @__PURE__ */ jsxs(Suspense, { fallback: null, children: [
    /* @__PURE__ */ jsx(PerspectiveCamera, { makeDefault: true, position: [0, 0, 10], fov: 35 }),
    /* @__PURE__ */ jsx(CameraController, {}),
    /* @__PURE__ */ jsx("ambientLight", {}),
    /* @__PURE__ */ jsx(SceneContent, {})
  ] }) }) });
}

const DemoOne = () => {
  return /* @__PURE__ */ jsxs("div", { className: "h-screen w-screen relative flex flex-col justify-center items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(Scene, {}) }),
    /* @__PURE__ */ jsx("h1", { className: "text-6xl md:text-8xl font-bold mb-6 tracking-tight mix-blend-difference text-white", children: "Solve the Complexity" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white mix-blend-exclusion max-w-2xl px-6 leading-relaxed", children: "One twist at a time." })
  ] });
};

const $$Egg = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "You Found It!", "description": "An interactive easter egg." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DemoOne", DemoOne, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/rubiks-cube-demo", "client:component-export": "DemoOne" })} ` })}`;
}, "/root/pixel/src/pages/egg.astro", void 0);

const $$file = "/root/pixel/src/pages/egg.astro";
const $$url = "/egg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Egg,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
