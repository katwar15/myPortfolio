import { Link, useLocation } from "react-router-dom";
import "./Job.css";
import forward_button from "../../assets/Arrow3.svg";

function Job() {
  const location = useLocation();

  const {
    titleJob,
    mainImg,
    jobDescription,
    mainImgOne,
    mainImgTwo,
    mainImgThree,
    entranceDis,
    years,
    company,
    tool1,
    tool2,
    tool3,
    tool4,
    tool5,
    tool6,
  } = location.state;

  return (
    <>
      <div className="containerJob">
        <Link to="/experience" className="forward_button">
          <img className="forward_img" src={forward_button}></img>
        </Link>
        <div className="jobEsenContainer">
          <div className="jobEsen">
            <h1 className="h1Job">{titleJob}</h1>
            <h2 className="h2Years">{years}</h2>
            <h2 className="h3Job">{company}</h2>
            <p className="pJobEsen">{entranceDis}</p>
          </div>
          <div className="jobTool">
            <h2 className="h2JobEsen">toolbox:</h2>
            <ul className="listTools">
              <il className="tool">{tool1}</il>
              <il className="tool">{tool2}</il>
              <il className="tool">{tool3}</il>
              <il className="tool">{tool4}</il>
              <il className="tool">{tool5}</il>
              <il className="tool">{tool6}</il>
            </ul>
          </div>
        </div>

        <img className="imageJob" src={mainImg}></img>
        <h2 className="h2Job">Job description:</h2>

        <p className="pJob">{jobDescription}</p>
        <div className="imagesJob">
          {/* array of the three images */}

          <img className="imgJobMini" src={mainImgOne}></img>
          <img className="imgJobMini" src={mainImgTwo}></img>

          <img className="imgJobMini" src={mainImgThree}></img>
        </div>
      </div>
    </>
  );
}

export default Job;
