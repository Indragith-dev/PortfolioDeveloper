import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero3D = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[2, 3, 4]} />
        <Sphere args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#8352FD"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
    </div>
  );
};

export default Hero3D;
