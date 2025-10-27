import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import * as THREE from 'three';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
`;

// Enhanced Earth-like Planet with realistic textures
function EarthPlanet({ earthScale, earthPosition }) {
  const meshRef = useRef();
  const cloudsRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.001;

      // Apply scroll-based transformations
      meshRef.current.scale.set(earthScale, earthScale, earthScale);
      meshRef.current.position.x = earthPosition.x * 0.1;
      meshRef.current.position.y = earthPosition.y * 0.1;

      // Subtle floating animation
      meshRef.current.position.y += Math.sin(t * 0.5) * 0.05;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0005;
      cloudsRef.current.scale.set(earthScale, earthScale, earthScale);
      cloudsRef.current.position.x = earthPosition.x * 0.1;
      cloudsRef.current.position.y = earthPosition.y * 0.1;
    }
  });

  return (
    <group>
      {/* Main Planet with realistic colors */}
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={1} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#4f8bff"
          specular="#ffffff"
          shininess={10}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Cloud Layer */}
      <Sphere
        ref={cloudsRef}
        args={[1.02, 64, 64]}
        scale={1}
        position={[0, 0, 0]}
      >
        <meshPhongMaterial
          color="#ffffff"
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </Sphere>

      {/* Atmospheric Glow */}
      <Sphere args={[1.1, 32, 32]} scale={1} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#4f8bff"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Enhanced Stars Background
function GalaxyBackground() {
  return (
    <>
      {/* Multiple star layers for depth */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#4f8bff" />
    </>
  );
}

// Orbiting Satellites
function OrbitingObjects() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2 + Math.random() * 0.5;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle) * 0.3,
              Math.sin(angle) * radius,
            ]}
          >
            <boxGeometry args={[0.05, 0.05, 0.2]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#4f8bff"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Main Scene
function SpaceScene({ earthScale, earthPosition }) {
  return (
    <>
      <GalaxyBackground />
      <EarthPlanet earthScale={earthScale} earthPosition={earthPosition} />
      <OrbitingObjects />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

function Hero3D({ earthScale, earthPosition }) {
  return (
    <CanvasContainer>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SpaceScene earthScale={earthScale} earthPosition={earthPosition} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default Hero3D;
