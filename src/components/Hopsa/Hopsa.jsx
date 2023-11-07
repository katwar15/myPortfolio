import { hopsaImages } from "../../constants";
import "./Hopsa.css";
import Hopsik from "./Hopsik";

const Hopsa = () => {
  return (
    <>
      <div className="hopsaDiv">
        <h1 className="h1_experience">Years of experience</h1>
        <p className="p_experienceHopsa">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="listMainGallery">
        <div className="listGallery">
          {hopsaImages.map((gallery) => {
            return <Hopsik gallery={gallery} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Hopsa;
