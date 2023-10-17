import { experienceLinks } from "../../constants";
import "./Job.css";

const Job = ({ experienceLinks }) => {
  return (
    <>
      <div className="containerJob">
        <h1 className="h1Job">{experienceLinks.title}</h1>
        <img className="imageJob" src={experienceLinks.mainImg}></img>
        <h2 className="h2Job">Opis stanowiska</h2>

        <p className=" pJob">{experienceLinks.jobDescription}</p>
        <div className="imagesJob">
          {/* array of the three images */}

          <img className="imgJob" src={experienceLinks.mainImgOne}></img>
          <img className="imgJob" src={experienceLinks.mainImgTwo}></img>

          <img className="imgJob" src={experienceLinks.mainImgThree}></img>
        </div>
        <h2 className="h2Job">Wykorzystywane narzędzia:</h2>

        <p className="pJob">{experienceLinks.toolsDescribtion}</p>
      </div>
    </>
  );
};

export default Job;
