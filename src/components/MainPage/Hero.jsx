import ImagesLoop from "../ImgLoopBackground/ImgLoop";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="containerHero">
        <ImagesLoop />
        <div className="containerName">
          <div className="flex flex-col ">
            <h1 className="h1Name ">katarzyna </h1>
            <h1 className="h1Name"> warmuz</h1>
          </div>
          <div className="containerUI">
            <h2 className="h2Outline">ui / ux</h2>
            <h2 className="h2HelveticaBold">designer</h2>
          </div>
          <div className="containerUI">
            <h2 className="h2HelveticaBold">frontend</h2>
            <h2 className="h2Outline">developer</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
