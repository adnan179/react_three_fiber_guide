import { Edges, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const CubeTwo = () => {
  const [is3D, setIs3D] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [isEdges, setIsEdges] = useState(false);
  const [edgeScale, setEdgeScale] = useState(1.15);
  const [edgeThreshold, setEdgeThreshold] = useState(10);
  const [edgeColor, setEdgeColor] = useState("black");

  const codeString = `
  const [is3D, setIs3D] = useState(true);
  const [isGrid, setIsGrid] = useState(false);
  const [isEdges, setIsEdges] = useState(false);
  const [edgeScale, setEdgeScale] = useState(1.15);
  const [edgeThreshold, setEdgeThreshold] = useState(10);
  const [edgeColor, setEdgeColor] = useState("black");
  <Canvas className="rounded-md bg-white shadow-md"
    style={{ width: "370px", height: "370px" }}>
    <ambientLight intensity={1.5} />
    <pointLight position={[5, 5, 5]} />
    <mesh>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="blue" />
      ${
        isEdges
          ? `<Edges scale={${edgeScale}} threshold={${edgeThreshold}} color={${edgeColor}}/>`
          : ""
      }
    </mesh>
    ${
      isGrid
        ? "{/* add a simple grid across xz plane */} <gridHelper args={[10, 10, gray, gray]} />"
        : ""
    }
    ${
      is3D
        ? "{/* let's you move the cube along 3 dimensions with your mouse */}<OrbitControls />"
        : ""
    }
  </Canvas>`;
  return (
    <div className="w-full columns">
      <h2 className="sub-heading-gray">Example-2:3D cube with edges</h2>
      {/* first row */}
      <div className="rows items-center w-full flex-center">
        <Canvas
          className="rounded-md bg-white shadow-md"
          style={{ width: "370px", height: "370px" }}
        >
          <ambientLight intensity={1.5} />
          <pointLight position={[5, 5, 5]} />

          <mesh>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color="blue" />
            {isEdges && (
              <Edges
                scale={edgeScale}
                threshold={edgeThreshold}
                color={edgeColor}
              />
            )}
          </mesh>
          {/* add a simple grid across xz plane */}
          {isGrid && <gridHelper args={[10, 10, "gray", "gray"]} />}
          {/* let's you move the cube along 3 dimensions with your mouse */}
          {is3D && <OrbitControls />}
        </Canvas>
        {/* settings container */}
        <div className="columns glass-container inside-padding shadow shadow-blue-900">
          <p className="text-gray-400">
            Play with the settings to understand more!!(sometimes being curious
            is best yk!)
          </p>
          {/* orbit controls and grid control btns */}
          <div className="flex flex-row gap-3">
            <div className="columns">
              <label className="text-white/80">Ability to move it in 3D:</label>
              <span className="text-gray-500 text-sm">
                Let&apos;s you move the cube across three planes(x,y,z).
              </span>
              <button
                onClick={() => setIs3D(!is3D)}
                className={`control-btn w-[200px] ${
                  is3D ? "shadow shadow-purple-700" : ""
                }`}
              >
                Orbit controls
              </button>
            </div>
            <div className="columns">
              <label className="text-white/80">Grid:</label>
              <span className="text-gray-500 text-sm">
                Adds grid across xz plane.
              </span>
              <button
                onClick={() => setIsGrid(!isGrid)}
                className={`control-btn ${
                  isGrid ? "shadow shadow-purple-700" : ""
                }`}
              >
                Grid
              </button>
            </div>
          </div>
          {/* orbit controls and grid control btns */}
          <div className="columns">
            <h3 className="text-white/80">Edges controls:</h3>
            <div className="flex flex-row gap-5">
              <div className="columns">
                <button
                  onClick={() => setIsEdges(!isEdges)}
                  className={`control-btn ${
                    isEdges ? "shadow shadow-purple-700" : ""
                  }`}
                >
                  Edges
                </button>
                <div className="flex space-x-4 items-center">
                  <label className="text-gray-500">Edge Color:</label>
                  <input
                    className=" w-8 h-8 border-none rounded-full cursor-pointer bg-transparent"
                    type="color"
                    value={edgeColor}
                    onChange={(e) => setEdgeColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="columns">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600">
                    Scale:
                    <span className="text-gray-400">
                      {" "}
                      (It defines the thickness of the edges)
                    </span>
                    {edgeScale}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={5}
                    step={0.015}
                    value={edgeScale}
                    onChange={(e) => setEdgeScale(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-600">
                    Threshold:
                    <span className="text-gray-400">
                      {" "}
                      (It controls the angle threshold for detecting edges)
                    </span>
                    {edgeThreshold}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={90}
                    step={10}
                    value={edgeThreshold}
                    onChange={(e) => setEdgeThreshold(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* settings container */}
      </div>
      {/* first row */}
      {/* second row */}
      <div className="flex-center rows">
        <CopyBlock
          text={codeString}
          language="jsx"
          showLineNumbers={false}
          wrapLongLines
          codeBlock
          theme={dracula}
        />
        <div className="bg-white/75 rounded-lg px-6 py-3 md:w-[350px] w-full">
          <h2 className="font-bold text-xl text-black/90">Note</h2>
          <p className="md:text-lg  text-gray-800">
            The orbit controls lets move the cube freely in the 3d plane, it is
            a easier way to achieve it. The edges will give the cube a little
            more realistic appearance to it. We can adjust the edges by
            adjusting it's scale and threshold values.The gridHelper allows you
            to have a simple grid across xz plane.
          </p>
        </div>
      </div>
      {/* second row */}
    </div>
  );
};

export default CubeTwo;
