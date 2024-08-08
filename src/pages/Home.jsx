import { Link } from "react-router-dom";
import GettingStarted from "../components/GettingStarted";
import { Edges } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
  const cubeRef = useRef();
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
      cubeRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="transparent" />
      <Edges scale={1.125} threshold={15} color="white" />
    </mesh>
  );
};

const Home = () => {
  return (
    <div className="columns w-h-screen common-padding">
      <h1 className="main-heading">React Three Fiber guide</h1>
      <GettingStarted />
      <h2 className="text-white/80 font-semibold text-2xl">Few Examples: </h2>
      <div className="columns w-full items-center md:items-start">
        <Link
          to="/cubes"
          className="columns flex-center w-[250px] h-[250px] inside-padding rounded-lg font-bold text-white/75 bg-black/50 shadow "
        >
          <Canvas style={{ width: "200px", height: "200px" }}>
            <ambientLight intensity={1.5} />
            <pointLight position={(10, 10, 10)} />
            <directionalLight position={[10, 10, 10]} />
            <RotatingCube />
          </Canvas>
          <p>Cube</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
