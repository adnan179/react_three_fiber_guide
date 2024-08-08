import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const RotatingCube = ({
  isRotatingX,
  isRotatingY,
  isRotatingZ,
  rotationSpeed,
}) => {
  const cubeRef = useRef();
  useFrame(() => {
    if (isRotatingX && cubeRef.current) {
      cubeRef.current.rotation.x += rotationSpeed;
    }
    if (isRotatingY && cubeRef.current) {
      cubeRef.current.rotation.y += rotationSpeed;
    }
    if (isRotatingZ && cubeRef.current) {
      cubeRef.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

const CubeThree = () => {
  const [isRotatingX, setIsRotatingX] = useState(false);
  const [isRotatingY, setIsRotatingY] = useState(false);
  const [isRotatingZ, setIsRotatingZ] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  const codeString = `
  const [isRotatingX, setIsRotatingX] = useState(false);
  const [isRotatingY, setIsRotatingY] = useState(false);
  const [isRotatingZ, setIsRotatingZ] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const RotatingCube = ({
  isRotatingX,
  isRotatingY,
  isRotatingZ,
  rotationSpeed,
}) => {
  const cubeRef = useRef();
  useFrame(() => {
    if (isRotatingX && cubeRef.current) {
      cubeRef.current.rotation.x += rotationSpeed;
    }
    if (isRotatingY && cubeRef.current) {
      cubeRef.current.rotation.y += rotationSpeed;
    }
    if (isRotatingZ && cubeRef.current) {
      cubeRef.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};
  <Canvas className="rounded-md bg-white shadow-md"
    style={{ width: "250px", height: "250px" }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight position={[10, 10, 10]} />
    <pointLight position={[10, 10, 10]} />
    <RotatingCube isRotatingX={isRotatingX}
      isRotatingY={isRotatingY}
      isRotatingZ={isRotatingZ}
      rotationSpeed={rotationSpeed}
    />
  </Canvas>
  `;

  return (
    <div className="w-full columns">
      <h2 className="sub-heading-gray">
        Example-3: Rotational properties of a cube
      </h2>
      {/* first row */}
      <div className="rows flex-center">
        <Canvas
          className="rounded-md bg-white shadow-md"
          style={{ width: "250px", height: "250px" }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} />
          <pointLight position={[10, 10, 10]} />
          <RotatingCube
            isRotatingX={isRotatingX}
            isRotatingY={isRotatingY}
            isRotatingZ={isRotatingZ}
            rotationSpeed={rotationSpeed}
          />
        </Canvas>
        {/* settings container */}
        <div className="columns glass-container inside-padding shadow shadow-blue-900">
          <p className="text-gray-400">
            Play with the settings to understand more!!(sometimes being curious
            is best yk!)
          </p>
          <label className="gray-heading">Rotation:</label>
          <div className="flex flex-row gap-3">
            <button
              onClick={() => setIsRotatingX(!isRotatingX)}
              className={`control-btn ${
                isRotatingX ? "shadow shadow-purple-700" : ""
              }`}
            >
              X-axis
            </button>
            <button
              onClick={() => setIsRotatingY(!isRotatingY)}
              className={`control-btn ${
                isRotatingY ? "shadow shadow-purple-700" : ""
              }`}
            >
              Y-axis
            </button>
            <button
              onClick={() => setIsRotatingZ(!isRotatingZ)}
              className={`control-btn ${
                isRotatingZ ? "shadow shadow-purple-700" : ""
              }`}
            >
              Z-axis
            </button>
          </div>
          <div className="columns">
            <label className="text-white/80 font-medium">
              Rotation Speed: {rotationSpeed}
            </label>
            <input
              type="range"
              min={0.01}
              max={0.5}
              step={0.001}
              value={rotationSpeed}
              onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
            />
          </div>
        </div>
        {/* settings container */}
      </div>
      {/* first row */}
      {/* second row */}
      <div className="flex-center">
        <CopyBlock
          language="jsx"
          text={codeString}
          codeBlock
          showLineNumbers={false}
          theme={dracula}
        />
      </div>
      {/* second row */}
    </div>
  );
};

export default CubeThree;
