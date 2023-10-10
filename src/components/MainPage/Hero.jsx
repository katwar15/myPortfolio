// import kasiulec from "../../assets/imageOfMyself.png";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-start px-14 mx-14 pt-10 ">
        <div className="flex flex-col ">
          <h1 className="text-7xl text-blackP">katarzyna </h1>
          <h1 className="text-7xl text-blackP pb-5"> warmuz</h1>
        </div>
      </div>

      <div className="w-full h-px bg-blackP"></div>

      <div className="flex flex-col justify-between items-start px-14 mx-14 pb-10">
        <div className="flex">
          <h2 className="pr-2 text-2xl text-blackP">ui / ux</h2>
          <h2 className="font-helveticaBold text-2xl text-blackP">designer</h2>
        </div>
        <div className="flex">
          <h2 className="font-helveticaBold pr-2 text-2xl text-blackP">
            frontend
          </h2>
          <h2 className="text-2xl text-blackP">developer</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
