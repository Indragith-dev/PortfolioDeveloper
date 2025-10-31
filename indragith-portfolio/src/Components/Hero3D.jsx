import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Lost Programmer Model
function LostProgrammerModel({ scale = 2, position = [0, 0, 0] }) {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/lost_programmer/scene.gltf');
  const [isHovered, setIsHovered] = React.useState(false);

  useFrame(() => {
    if (modelRef.current) {
      const time = Date.now() * 0.001;

      // Subtle floating animation - enhanced when hovered
      const floatIntensity = isHovered ? 0.1 : 0.05;
      modelRef.current.position.y =
        position[1] + Math.sin(time) * floatIntensity;

      // Very slow rotation - faster when hovered
      const rotationSpeed = isHovered ? 0.003 : 0.001;
      modelRef.current.rotation.y += rotationSpeed;

      // Apply scale with hover effect
      const hoverScale = isHovered ? 1.1 : 1.0;
      modelRef.current.scale.set(
        scale * hoverScale,
        scale * hoverScale,
        scale * hoverScale
      );
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      position={[position[0], position[1], 0]}
      rotation={[Math.PI, Math.PI * 0.25, 0]} // Upside down
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    />
  );
}

// Stars Background
function GalaxyBackground() {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
  );
}

// Interactive Controls
function InteractiveControls() {
  return (
    <OrbitControls
      enableZoom={true}
      enablePan={false}
      enableRotate={true}
      autoRotate={false}
      maxPolarAngle={Math.PI}
      minPolarAngle={0}
      maxDistance={15}
      minDistance={3}
    />
  );
}

// Simple Lighting
function SceneLighting() {
  return (
    <>
      <directionalLight
        position={[5, 5, 5]}
        intensity={3.0}
        color="#ffffff"
        castShadow
      />
      <pointLight position={[-5, -5, 5]} intensity={2.0} color="#4fa8ff" />
      <ambientLight intensity={0.3} color="#1a2a4a" />
      <hemisphereLight
        skyColor="#1a2a4a"
        groundColor="#2a1a4a"
        intensity={0.2}
      />
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <mesh rotation={[Math.PI, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

// Main Scene
function SpaceScene({ modelScale, modelPosition }) {
  return (
    <>
      <SceneLighting />
      <GalaxyBackground />
      <Suspense fallback={<LoadingFallback />}>
        <LostProgrammerModel
          scale={modelScale}
          position={[modelPosition.x, modelPosition.y, 0]}
        />
      </Suspense>
      <InteractiveControls />
    </>
  );
}

function Hero3D({ modelScale = 2, modelPosition = { x: 0, y: 0 } }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'auto', // Enable interactions
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <color attach="background" args={['#000011']} />
        <fog attach="fog" args={['#000011', 5, 20]} />
        <SpaceScene modelScale={modelScale} modelPosition={modelPosition} />
      </Canvas>
    </div>
  );
}

// Preload the model
useGLTF.preload('/models/lost_programmer/scene.gltf');

export default Hero3D;
