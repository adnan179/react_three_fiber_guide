import { Link } from "react-router-dom";
import CubeOne from "../components/CubeOne";
import CubeTwo from "../components/CubeTwo";
import CubeThree from "../components/CubeThree";

const CubesPage = () => {
  return (
    <div className="columns common-padding relative">
      <Link to="/" className="absolute top-5 left-5 flex">
        <h3 className="text-gray-500 font-medium text-lg">{"<"}-prev</h3>
      </Link>
      <h1 className="main-heading md:mt-2 mt-10">Cube examples</h1>
      <div>
        <CubeOne />
      </div>
      <div className="mt-10">
        <CubeTwo />
      </div>
      <div className="mt-10">
        <CubeThree />
      </div>
    </div>
  );
};

export default CubesPage;
