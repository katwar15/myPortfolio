import Marquee from "react-fast-marquee";
import { marqueAdje } from "../../constants/index.jsx";
import styles from "../../style";

const MarqueeComponent = () => {
  return (
    <>
      <div className=" relative w-full py-10">
        <Marquee
          gradient={false}
          direction={"left"}
          speed={20}
          pauseOnHover={true}
        >
          <div className={`${styles.flexCenter} overflow-hidden pt-5`}>
            {marqueAdje.map((e, index) =>
              index % 2 === 0 ? (
                <h2
                  key={e.id["skills"]}
                  style={{
                    fontFamily: "HelveticaNeueBold",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "#151311",
                  }}
                >
                  {e.title}
                </h2>
              ) : (
                <h2
                  key={e.id["soft-skill"]}
                  style={{
                    fontFamily: "HelveticaLT75BoldOutline",
                    color: "#151311",
                  }}
                >
                  {e.title}
                </h2>
              )
            )}
          </div>
        </Marquee>
        <Marquee
          gradient={false}
          direction={"right"}
          speed={20}
          pauseOnHover={true}
        >
          <div className={`${styles.flexCenter}  pb-5`}>
            {marqueAdje.map((e, index) =>
              index % 2 === 0 ? (
                <h2
                  key={e.id["skills"]}
                  style={{
                    fontFamily: "HelveticaNeueBold",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    color: "#151311",
                  }}
                >
                  {e.title}
                </h2>
              ) : (
                <h2
                  key={e.id["soft-skill"]}
                  style={{
                    fontFamily: "HelveticaLT75BoldOutline",
                    color: "#151311",
                  }}
                >
                  {e.title}
                </h2>
              )
            )}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeComponent;
