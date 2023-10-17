import Hopsa from "../Hopsa/Hopsa";
import Job from "../JobComponent/Job";
import MarqueeComponent from "../MaqueeComponent/MarqueeComponent";
import Hero from "./Hero";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Hero />
      <MarqueeComponent />
      <Hopsa />
      <Job></Job>
    </div>
  );
};

export default MainPage;
