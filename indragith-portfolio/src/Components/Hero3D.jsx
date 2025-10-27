import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Earth Model with proper texture loading
function EarthModel({ earthScale }) {
  const meshRef = useRef();
  const cloudsRef = useRef();

  // Load Earth textures with error handling
  const earthTextures = useTexture({
    map: '/models/earth/textures/TERRE_baseColor.jpeg',
    emissiveMap: '/models/earth/textures/TERRE_emissive.jpeg',
    metalnessMap: '/models/earth/textures/TERRE_metallicRoughness.png',
    roughnessMap: '/models/earth/textures/TERRE_metallicRoughness.png',
  });

  // Load clouds texture
  const cloudsTexture = useTexture(
    '/models/earth/textures/NUAGES_baseColor.png'
  );

  useEffect(() => {
    // Configure Earth textures
    Object.values(earthTextures).forEach((texture) => {
      texture.encoding = THREE.sRGBEncoding;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    });

    // Configure clouds texture
    cloudsTexture.encoding = THREE.sRGBEncoding;
    cloudsTexture.wrapS = THREE.RepeatWrapping;
    cloudsTexture.wrapT = THREE.RepeatWrapping;
    cloudsTexture.transparent = true;
  }, [earthTextures, cloudsTexture]);

  useFrame(() => {
    if (meshRef.current) {
      // ONLY Earth rotates on Y axis
      meshRef.current.rotation.y += 0.001;
      // Fixed scale and position - LARGER SCALE
      meshRef.current.scale.set(earthScale, earthScale, earthScale);
    }

    if (cloudsRef.current) {
      // ONLY clouds rotate with Earth
      cloudsRef.current.rotation.y += 0.0008;
      cloudsRef.current.scale.set(
        earthScale * 1.001,
        earthScale * 1.001,
        earthScale * 1.001
      );
    }
  });

  return (
    <group position={[3, 0, 0]}>
      {' '}
      {/* Fixed position on right */}
      {/* Earth Sphere */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          {...earthTextures}
          metalness={1.0}
          roughness={0.8}
          emissive={new THREE.Color(0x000000)}
          emissiveIntensity={0.1}
          transparent={false}
        />
      </mesh>
      {/* Clouds Layer */}
      <mesh ref={cloudsRef} castShadow receiveShadow>
        <sphereGeometry args={[1.02, 64, 64]} />
        <meshPhysicalMaterial
          map={cloudsTexture}
          transparent={true}
          opacity={0.8}
          alphaTest={0.1}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
}

// Simple Astronaut Model for left side - NO ROTATION
function SimpleAstronautModel({ earthScale }) {
  const astronautRef = useRef();
  const { scene } = useGLTF('/models/rust_space_suit/astronautScene.gltf');

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.needsUpdate = true;
            child.material.roughness = 0.6;
            child.material.metalness = 0.4;
          }
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (astronautRef.current) {
      const time = Date.now() * 0.001;
      // ONLY up and down floating movement - NO ROTATION
      // Start from -1 (down position) and float around that point
      astronautRef.current.position.y = -8 + Math.sin(time) * 0.1;

      // Fixed scale - larger than Earth
      astronautRef.current.scale.set(
        earthScale * 1.8,
        earthScale * 1.8,
        earthScale * 1.8
      );
      // NO position.x or position.z changes
    }
  });

  return (
    <primitive
      ref={astronautRef}
      object={scene}
      scale={1.6}
      position={[-4, -1, 0]} // Fixed position on left, moved down
      rotation={[0, Math.PI * 0.1, 0]} // Fixed initial rotation only
    />
  );
}

// Enhanced Stars Background
function GalaxyBackground() {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </group>
  );
}

// Orbiting Satellites - REMOVED if you don't want them
function OrbitingObjects() {
  const groupRef = useRef();
  const satellitesRef = useRef([]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }

    satellitesRef.current.forEach((satellite) => {
      if (satellite) {
        satellite.rotation.x += 0.02;
        satellite.rotation.z += 0.01;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 1.8 + Math.random() * 0.6;
        const isLarge = i % 3 === 0;

        return (
          <mesh
            key={i}
            ref={(el) => (satellitesRef.current[i] = el)}
            position={[
              Math.cos(angle) * radius,
              (Math.random() - 0.5) * 0.3,
              Math.sin(angle) * radius,
            ]}
          >
            {isLarge ? (
              <octahedronGeometry args={[0.04, 0]} />
            ) : (
              <sphereGeometry args={[0.02, 6, 6]} />
            )}
            <meshStandardMaterial
              color={isLarge ? '#fbbf24' : '#ffffff'}
              emissive={isLarge ? '#f59e0b' : '#60a5fa'}
              emissiveIntensity={3.0}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Updated Lighting for new layout
function SceneLighting() {
  const mainLightRef = useRef();
  const astronautLightRef = useRef();
  const earthLightRef = useRef();

  useFrame(() => {
    const time = Date.now() * 0.001;

    if (mainLightRef.current) {
      mainLightRef.current.intensity = 3.5 + Math.sin(time * 0.5) * 0.3;
    }

    if (astronautLightRef.current) {
      astronautLightRef.current.intensity = 2.5 + Math.sin(time * 0.7) * 0.2;
    }

    if (earthLightRef.current) {
      earthLightRef.current.intensity = 4.0 + Math.sin(time * 0.3) * 0.4;
    }
  });

  return (
    <>
      {/* Main directional light */}
      <directionalLight
        ref={mainLightRef}
        position={[0, 5, 8]}
        intensity={3.5}
        color="#fff9e6"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Light focused on Earth (right side) */}
      <spotLight
        ref={earthLightRef}
        position={[6, 3, 4]}
        intensity={4.0}
        color="#e6f7ff"
        distance={12}
        angle={Math.PI / 4}
        penumbra={0.5}
        target-position={[3, 0, 0]}
      />

      {/* Light focused on Astronaut (left side) */}
      <spotLight
        ref={astronautLightRef}
        position={[-6, 3, 4]}
        intensity={2.5}
        color="#ffffff"
        distance={10}
        angle={Math.PI / 5}
        penumbra={0.3}
        target-position={[-3, 0, 0]}
      />

      <directionalLight position={[0, -2, 5]} intensity={1.2} color="#4fa8ff" />

      <pointLight
        position={[-5, -1, -2]}
        intensity={1.5}
        color="#ffaa66"
        distance={15}
      />

      <pointLight
        position={[5, -1, -2]}
        intensity={1.8}
        color="#66aaff"
        distance={12}
      />

      <ambientLight intensity={0.4} color="#1a2a4a" />

      <hemisphereLight
        skyColor="#1a2a4a"
        groundColor="#2a1a4a"
        intensity={0.3}
      />
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error in 3D component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// Main Scene
function SpaceScene({ earthScale, earthPosition }) {
  return (
    <>
      <SceneLighting />
      <GalaxyBackground />
      <Suspense fallback={<LoadingFallback />}>
        <ErrorBoundary>
          <EarthModel earthScale={earthScale} earthPosition={earthPosition} />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={null}>
        <ErrorBoundary>
          <SimpleAstronautModel earthScale={earthScale} />
        </ErrorBoundary>
      </Suspense>
      {/* Remove OrbitingObjects if you don't want moving satellites */}
      {/* <OrbitingObjects /> */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false} // Disabled auto rotate
      />
    </>
  );
}

function Hero3D({ earthScale = 1.8, earthPosition = { x: 0, y: 0 } }) {
  // Increased default earthScale from 1 to 1.8
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <Canvas
        camera={{
          position: [0, 2, 10], // Moved camera back slightly to accommodate larger Earth
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        shadows
      >
        <color attach="background" args={['#000011']} />
        <SpaceScene earthScale={earthScale} earthPosition={earthPosition} />
      </Canvas>
    </div>
  );
}

// Preload models
useGLTF.preload('/models/rust_space_suit/astronautScene.gltf');

export default Hero3D;
