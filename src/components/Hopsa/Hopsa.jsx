import { hopsaImages } from "../../constants";
import "./Hopsa.css";
import Hopsik from "./Hopsik";

const Hopsa = () => {
  return (
    <>
      <div className="containerHopsa">
        <div className="galleryHopsa">
          <Hopsik hopsaImages={[hopsaImages[0], hopsaImages[1]]} />
        </div>
      </div>
    </>
  );
};

export default Hopsa;
