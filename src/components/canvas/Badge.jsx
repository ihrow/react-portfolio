import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber/";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from '../Loader'

const Badge = () => {
  const badge = useGLTF("./badge/scene.gltf");
  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight
        position={[80, 50, 5]}
        intensity={1.25}
        color="white"
      />
      <ambientLight />
      <primitive
        object={badge.scene}
        scale={0.07}
        rotation={[0, 1.5, 0]}
      />
    </mesh>
  );
};

const BadgeCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [200, 3, 5],
        fov: 25
      }}
      gl={{
        preserveDrawingBuffer: true
      }}
    >
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Badge />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BadgeCanvas;