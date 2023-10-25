import { useLocation } from "react-router-dom";
import "./Job.css";

function Job() {
  const location = useLocation();

  const {
    titleJob,
    mainImg,
    jobDescription,
    mainImgOne,
    mainImgTwo,
    mainImgThree,
    toolsDescribtion,
  } = location.state;

  return (
    <>
      <div className="containerJob">
        <h1 className="h1Job">{titleJob}</h1>
        <p className="pJob">coś tam trzeba wymyślic</p>

        <img className="imageJob" src={mainImg}></img>
        <h2 className="h2Job">Opis stanowiska</h2>

        <p className="pJob">{jobDescription}</p>
        <div className="imagesJob">
          {/* array of the three images */}

          <img className="imgJobMini" src={mainImgOne}></img>
          <img className="imgJobMini" src={mainImgTwo}></img>

          <img className="imgJobMini" src={mainImgThree}></img>
        </div>
        <h2 className="h2Job">Wykorzystywane narzędzia:</h2>

        <p className="pJob">{toolsDescribtion}</p>
      </div>
    </>
  );
}

export default Job;
