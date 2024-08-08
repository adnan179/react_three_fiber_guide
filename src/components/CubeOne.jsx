import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { dracula, CopyBlock } from "react-code-blocks";

const CubeOne = () => {
  const [cubeColor, setCubeColor] = useState(undefined);
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(0.5);

  const codeString = `
  <Canvas
    className="rounded-md bg-white shadow-md"
    style={{ width: "250px", height: "250px" }}
  >
    ${`<ambientLight intensity={${ambientLightIntensity}} />`}
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
     ${`<meshStandardMaterial color={${cubeColor}} />`}
    </mesh>
  </Canvas>
    `;
  return (
    <div className="w-full columns">
      <h2 className="sub-heading-gray">Example-1: Simple 2D cube</h2>
      {/* first row */}
      <div className="rows items-center w-full flex-center">
        <Canvas
          className="rounded-md bg-white shadow-md"
          style={{ width: "250px", height: "250px" }}
        >
          <ambientLight intensity={ambientLightIntensity} />
          <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={cubeColor} />
          </mesh>
        </Canvas>
        {/* settings container */}
        <div className="columns glass-container inside-padding shadow shadow-blue-900">
          <p className="text-gray-400">
            Play with the settings to understand more!!(sometimes being curious
            is best yk!)
          </p>
          {/* color container */}
          <div className="flex flex-col gap-5">
            <h2 className="sub-heading-gray">Select a color:</h2>
            <div className="flex flex-row gap-4 items-center">
              <button
                className={`color-button ${
                  cubeColor === "#1d4ed8" ? "shadow shadow-[#1d4ed8]" : ""
                }`}
                onClick={() => setCubeColor("#1d4ed8")}
              >
                <div className="w-5 h-5 rounded-md bg-blue-700"></div>
                <p className="font-medium">Blue</p>
              </button>
              <button
                className={`color-button ${
                  cubeColor === "#b91c1c" ? "shadow shadow-[#b91c1c]" : ""
                }`}
                onClick={() => setCubeColor("#b91c1c")}
              >
                <div className="w-5 h-5 rounded-md bg-red-700"></div>
                <p className="text-white/75 font-medium">Red</p>
              </button>
              <button
                className={`color-button ${
                  cubeColor === "#831843" ? "shadow shadow-[#831843]" : ""
                }`}
                onClick={() => setCubeColor("#831843")}
              >
                <div className="w-5 h-5 rounded-md bg-pink-900"></div>
                <p className="text-white/75 font-medium">Pink</p>
              </button>
            </div>
          </div>
          {/* color container */}
          {/* ambient light container */}
          <div className="flex flex-col gap-2">
            <h2 className="sub-heading-gray">
              Adjust the Ambient light:
              <span className="gray-light">
                {" "}
                (Adjust the value and see how the selected color changes
                respectively)
              </span>
            </h2>
            <input
              type="range"
              value={ambientLightIntensity}
              onChange={(e) => setAmbientLightIntensity(e.target.value)}
              min={0}
              max={2}
              step={0.1}
            />
          </div>
          {/* ambient light container */}
        </div>
        {/* settings container */}
      </div>
      {/* first row */}
      {/* second row */}
      <div className="rows flex justify-center w-full">
        {/* codeblock */}
        <div className="xl:w-[670px] w-full">
          <CopyBlock
            language="jsx"
            text={codeString}
            showLineNumbers={false}
            wrapLongLines={true}
            theme={dracula}
          />
        </div>
        {/* codeblock */}
        {/* note container */}
        <div className="bg-white/75 rounded-lg px-6 py-3 md:w-[350px] w-full">
          <h2 className="font-bold text-xl text-black/90">Note</h2>
          <p className="md:text-lg  text-gray-800">
            If the Ambient light intensity becomes zero, then whatever color you
            choose it will still be black. Imagine ambient light as the light of
            your living room, when it is on you can see the colors of other
            things but if it is off, then everything will be black
          </p>
        </div>
        {/* note container */}
      </div>
      {/* second row */}
    </div>
  );
};

export default CubeOne;
