import { useState } from "react";
import Marquee from "react-fast-marquee";
import { marqueAdje } from "../../constants/index.jsx";
import styles from "../../style";

const MarqueeComponent = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          borderTop: "1px solid rgb(21, 19, 17)",
          transition: "all 0.4s",
          width: "100%",
        }}
      >
        {hover ? (
          <Marquee
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
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
                      style={{
                        fontFamily: "KonstantGrotesk",

                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        color: "#151311",
                        alignSelf: "center",
                      }}
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
                      style={{
                        fontFamily: "HelveticaNeueRegular",
                        color: "#151311",
                      }}
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
            style={{
              paddingTop: "4rem",
              paddingBottom: "4rem",
            }}
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
                    style={{
                      fontFamily: "KonstantGrotesk",

                      paddingLeft: "3rem",
                      paddingRight: "3rem",
                      color: "#151311",
                    }}
                  >
                    {e.title}
                  </h2>
                ) : (
                  <h2
                    key={e.id["soft-skill"]}
                    style={{
                      fontFamily: "HelveticaNeueRegular",
                      color: "#151311",
                    }}
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
          transition: "all 0.4s",
        }}
        className="w-full "
      >
        {hover2 ? (
          <Marquee
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.5)",

              paddingTop: "2rem",
              paddingBottom: "2rem",
            }}
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
                      style={{
                        fontFamily: "KonstantGrotesk",

                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        color: "#151311",
                        alignSelf: "center",
                      }}
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
                      style={{
                        fontFamily: "HelveticaNeueRegular",

                        color: "#151311",
                      }}
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
            style={{
              paddingTop: "4rem",
              paddingBottom: "4rem",
            }}
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
                    style={{
                      fontFamily: "KonstantGrotesk",

                      paddingLeft: "3rem",
                      paddingRight: "3rem",
                      color: "#151311",
                    }}
                  >
                    {e.title}
                  </h2>
                ) : (
                  <h2
                    key={e.id["soft-skill"]}
                    style={{
                      fontFamily: "HelveticaNeueRegular",

                      color: "#151311",
                    }}
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
