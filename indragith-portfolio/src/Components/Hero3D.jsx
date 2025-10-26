// src/Components/Hero3D.js
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: radial-gradient(
    ellipse at bottom,
    #1a1a2e 0%,
    #16213e 50%,
    #0a0a0a 100%
  );
`;

function AnimatedSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 4) / 8;
      meshRef.current.rotation.y = Math.sin(t / 2) / 4;
      meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.2}
      />
    </Sphere>
  );
}

function Hero3D() {
  return (
    <HeroContainer>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          color="#8b5cf6"
          intensity={0.5}
        />
        <AnimatedSphere />
      </Canvas>
    </HeroContainer>
  );
}

export default Hero3D;
