import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { marqueAdje } from "../../constants/index.jsx";
import styles from "../../style";

const MarqueeComponent = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const isPaddingOk = useMediaQuery("(min-width: 768px)");

  const styl = {
    container: (isPaddingOk) => ({
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      paddingTop: isPaddingOk ? "2rem" : "1rem",
      paddingBottom: isPaddingOk ? "2rem" : "1rem",
    }),
    containerNoImg: (isPaddingOk) => ({
      paddingTop: isPaddingOk ? "4rem" : "2rem",
      paddingBottom: isPaddingOk ? "4rem" : "2rem",
    }),
    h2Container: (isPaddingOk) => ({
      fontSize: isPaddingOk ? "1.8rem" : "1.3rem",
      fontFamily: "KonstantGrotesk",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      color: "#151311",
      alignSelf: "center",
    }),
  };

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          borderTop: "1px solid rgb(21, 19, 17)",
          transition: "all 0.01s",
          width: "100%",
        }}
      >
        {hover ? (
          <Marquee
            style={styl.container(isPaddingOk)}
            gradient={false}
            direction={"right"}
            speed={130}
            pauseOnHover={false}
          >
            <div className={`${styles.flexCenter}  `}>
              {marqueAdje.map((e, index) =>
                index % 2 === 0 ? (
                  <>
                    <h2
                      key={e.id["skills"]}
                      style={styl.h2Container(isPaddingOk)}
                    >
                      {e.title}
                    </h2>
                    <img
                      style={{
                        width: "200px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        objectFit: "cover",
                      }}
                      src={e.src}
                    ></img>
                  </>
                ) : (
                  <>
                    <h2
                      key={e.id["soft-skill"]}
                      style={styl.h2Container(isPaddingOk)}
                    >
                      {e.title}
                    </h2>
                    <img
                      style={{
                        width: "200px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        objectFit: "cover",
                      }}
                      src={e.src}
                    ></img>
                  </>
                )
              )}
            </div>
          </Marquee>
        ) : (
          <Marquee
            style={styl.containerNoImg(isPaddingOk)}
            gradient={false}
            direction={"left"}
            speed={50}
            pauseOnHover={false}
          >
            <div className={`${styles.flexCenter} overflow-hidden `}>
              {marqueAdje.map((e, index) =>
                index % 2 === 0 ? (
                  <h2
                    key={e.id["skills"]}
                    style={styl.h2Container(isPaddingOk)}
                  >
                    {e.title}
                  </h2>
                ) : (
                  <h2
                    key={e.id["soft-skill"]}
                    style={styl.h2Container(isPaddingOk)}
                  >
                    {e.title}
                  </h2>
                )
              )}
            </div>
          </Marquee>
        )}
      </div>
      <div
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
        style={{
          borderTop: "1px solid rgb(21, 19, 17)",
          borderBottom: "1px solid rgb(21, 19, 17)",
          transition: "all 0.01s",
        }}
        className="w-full "
      >
        {hover2 ? (
          <Marquee
            style={styl.container(isPaddingOk)}
            gradient={false}
            direction={"left"}
            speed={130}
            pauseOnHover={false}
          >
            <div className={`${styles.flexCenter}  `}>
              {marqueAdje.map((e, index) =>
                index % 2 === 0 ? (
                  <>
                    <h2
                      key={e.id["skills"]}
                      style={styl.h2Container(isPaddingOk)}
                    >
                      {e.title}
                    </h2>
                    <img
                      style={{
                        width: "200px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        objectFit: "cover",
                      }}
                      src={e.src}
                    ></img>
                  </>
                ) : (
                  <>
                    <h2
                      key={e.id["soft-skill"]}
                      style={styl.h2Container(isPaddingOk)}
                    >
                      {e.title}
                    </h2>
                    <img
                      style={{
                        width: "200px",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                        objectFit: "cover",
                      }}
                      src={e.src}
                    ></img>
                  </>
                )
              )}
            </div>
          </Marquee>
        ) : (
          <Marquee
            style={styl.containerNoImg(isPaddingOk)}
            gradient={false}
            direction={"right"}
            speed={50}
            pauseOnHover={false}
          >
            <div className={`${styles.flexCenter} overflow-hidden `}>
              {marqueAdje.map((e, index) =>
                index % 2 === 0 ? (
                  <h2
                    key={e.id["skills"]}
                    style={styl.h2Container(isPaddingOk)}
                  >
                    {e.title}
                  </h2>
                ) : (
                  <h2
                    key={e.id["soft-skill"]}
                    style={styl.h2Container(isPaddingOk)}
                  >
                    {e.title}
                  </h2>
                )
              )}
            </div>
          </Marquee>
        )}
      </div>
    </>
  );
};

export default MarqueeComponent;
