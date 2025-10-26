import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls, Cloud } from '@react-three/drei';
import styled from 'styled-components';
import * as THREE from 'three';

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

// Earth-like Planet
function EarthPlanet({ scrollProgress }) {
  const meshRef = useRef();
  const cloudsRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y += 0.002;

      // React to scroll
      meshRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;

      // Scale on hover
      const targetScale = hovered ? 1.4 : 1.2;
      meshRef.current.scale.lerp(
        { x: targetScale, y: targetScale, z: targetScale },
        0.1
      );
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      {/* Main Planet */}
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        scale={1.2}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color="#4a90e2"
          emissive="#1e3a8a"
          emissiveIntensity={0.3}
          roughness={0.7}
          metalness={0.2}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[1.05, 64, 64]} scale={1.2} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Cloud Layer */}
      <Sphere
        ref={cloudsRef}
        args={[1.02, 64, 64]}
        scale={1.2}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          roughness={1}
        />
      </Sphere>
    </group>
  );
}

// Orbiting Moons/Satellites
function OrbitingObjects({ scrollProgress }) {
  const groupRef = useRef();
  const objectRefs = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.2 + scrollProgress * 3;
    }

    objectRefs.current.forEach((obj, i) => {
      if (obj) {
        obj.position.y = Math.sin(t * 0.8 + i) * 0.2;
        obj.rotation.y += 0.02;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.5;
        const isLarge = i % 2 === 0;
        return (
          <mesh
            key={i}
            ref={(el) => (objectRefs.current[i] = el)}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
          >
            {isLarge ? (
              <octahedronGeometry args={[0.08, 0]} />
            ) : (
              <sphereGeometry args={[0.05, 16, 16]} />
            )}
            <meshStandardMaterial
              color={isLarge ? '#c4b5fd' : '#8b5cf6'}
              emissive={isLarge ? '#8b5cf6' : '#6d28d9'}
              emissiveIntensity={0.6}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Asteroid Belt
function AsteroidBelt({ scrollProgress }) {
  const groupRef = useRef();
  const asteroids = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = -t * 0.1 - scrollProgress * 2;
    }

    asteroids.current.forEach((asteroid) => {
      if (asteroid) {
        asteroid.rotation.x += 0.01;
        asteroid.rotation.z += 0.005;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(20)].map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 3.5 + Math.random() * 0.5;
        const size = 0.03 + Math.random() * 0.04;
        return (
          <mesh
            key={i}
            ref={(el) => (asteroids.current[i] = el)}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 0.5,
              Math.sin(angle) * radius,
            ]}
          >
            <dodecahedronGeometry args={[size, 0]} />
            <meshStandardMaterial
              color="#6b7280"
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Shooting Stars
function ShootingStars() {
  const starsRef = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    starsRef.current.forEach((star, i) => {
      if (star) {
        const speed = 0.5 + i * 0.1;
        star.position.x = ((t * speed) % 10) - 5;
        star.position.z = -3 - i * 0.5;
        star.position.y = 2 - i * 0.3;
      }
    });
  });

  return (
    <group>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} ref={(el) => (starsRef.current[i] = el)}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
}

// Enhanced Galaxy Background
function GalaxyBackground() {
  const nebulaClouds = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    nebulaClouds.current.forEach((cloud, i) => {
      if (cloud) {
        cloud.rotation.z = t * 0.05 * (i % 2 === 0 ? 1 : -1);
        cloud.material.opacity = 0.1 + Math.sin(t + i) * 0.05;
      }
    });
  });

  return (
    <>
      {/* Multiple Star Layers for Depth */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Stars
        radius={50}
        depth={30}
        count={2000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Nebula Clouds */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (nebulaClouds.current[i] = el)}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            -10 - Math.random() * 10,
          ]}
          rotation={[0, 0, Math.random() * Math.PI]}
        >
          <planeGeometry args={[15, 15]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#8b5cf6' : '#3b82f6'}
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[10, -10, -5]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[0, 10, 5]} intensity={0.5} color="#60a5fa" />
    </>
  );
}

// Main Scene
function SpaceScene({ scrollProgress }) {
  return (
    <>
      <GalaxyBackground scrollProgress={scrollProgress} />
      <EarthPlanet scrollProgress={scrollProgress} />
      <OrbitingObjects scrollProgress={scrollProgress} />
      <AsteroidBelt scrollProgress={scrollProgress} />
      <ShootingStars />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        minDistance={2}
        maxDistance={8}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

function Hero3D({ scrollProgress }) {
  return (
    <CanvasContainer>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SpaceScene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default Hero3D;
