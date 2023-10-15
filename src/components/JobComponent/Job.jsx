import "./Job.css";
import job from "../../assets/job.png";
import job1 from "../../assets/job1.png";
import job2 from "../../assets/job2.png";
import job3 from "../../assets/job3.png";

const Job = () => {
  return (
    <>
      <div className="containerJob">
        <h1 className="h1Job">Job name</h1>
        <img className="imageJob" src={job}></img>
        <h2 className="h2Job">Opis stanowiska</h2>

        <p className=" pJob">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="imagesJob">
          {/* array of the three images */}

          <img className="imgJob" src={job1}></img>
          <img className="imgJob" src={job2}></img>

          <img className="imgJob" src={job3}></img>
        </div>
        <h2 className="h2Job">Opis stanowiska</h2>

        <p className="pJob">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default Job;
