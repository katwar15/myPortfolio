import Marquee from "react-fast-marquee";
import { marqueAdje } from "../../constants/index.jsx";
import styles from "../../style";

const MarqueeComponent = () => {
  return (
    <>
      <Marquee gradient={false} direction={"left"} pauseOnHover={true}>
        <div
          className={`${styles.flexCenter} w-full bg-colorArancia overflow-hidden pt-5`}
        >
          {marqueAdje.map((e, index) =>
            index % 2 === 0 ? (
              <h2
                key={e.id["skills"]}
                style={{
                  fontFamily: "HelveticaNeueBold",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {e.title}
              </h2>
            ) : (
              <h2
                key={e.id["soft-skill"]}
                style={{ fontFamily: "HelveticaLT75BoldOutline" }}
              >
                {e.title}
              </h2>
            )
          )}
        </div>
      </Marquee>
      <Marquee gradient={false} direction={"right"} pauseOnHover={true}>
        <div
          className={`${styles.flexCenter} w-full bg-colorArancia overflow-hidden pb-5`}
        >
          {marqueAdje.map((e, index) =>
            index % 2 === 0 ? (
              <h2
                key={e.id["skills"]}
                style={{
                  fontFamily: "HelveticaNeueBold",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {e.title}
              </h2>
            ) : (
              <h2
                key={e.id["soft-skill"]}
                style={{ fontFamily: "HelveticaLT75BoldOutline" }}
              >
                {e.title}
              </h2>
            )
          )}
        </div>
      </Marquee>
    </>
  );
};

export default MarqueeComponent;
