import { hopsaImages } from "../../constants";
import "./Hopsa.css";
import Hopsik from "./Hopsik";

const Hopsa = () => {
  return (
    <>
      <div className="hopsaDiv">
        <h1 className="h1_experience">Years of experience</h1>
        <p className="p_experience">
          Throughout my career, I have had several accomplishments across
          various domains. I have authored scientific articles as well as
          articles about design. Moreover, I was a Ph.D. student and taught
          students about new media and feminism. Additionally, I have worked as
          an editor for a humanities magazine. I have also created a brand and
          learned about UX and UI design. Later, I learned how to code to bring
          my ideas to life. All of this experience has helped me to think
          broadly and unconventionally.
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
