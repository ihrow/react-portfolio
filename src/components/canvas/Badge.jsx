import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber/";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";

import CanvasLoader from '../Loader'
import {useMobile} from "../hooks/useMobile.js";

const Badge = ({ isMobile }) => {
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
        scale={isMobile ? 0.07 : 0.07}
        position={isMobile ? [0, -3, -2.2] : [10, 0, 0]}
        rotation={[0, 1.5, 0]}
      />
    </mesh>
  );
};

const BadgeCanvas = () => {
  const isMobile = useMobile();
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
        <Badge isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BadgeCanvas;