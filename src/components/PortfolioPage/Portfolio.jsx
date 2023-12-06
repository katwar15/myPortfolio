// import gsap from "gsap";
import { useState } from "react";
import { portfolioLinks } from "../../constants/index.jsx";
import Column from "./Column.jsx";
import "./Portfolio.css";
import Modal from "./Modal/Modal.jsx";
import ForwardButton from "../ForwardButton/ForwardButton.jsx";

const Portfolio = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className="containerPortfolio">
        <ForwardButton />

        <h1 className="h1_portfolio">Portfolio</h1>
        <p className=" p_portfolio">
          Cool that you&apos;re here! Below you will find links to pages I have
          made, that I will make, or links to my{" "}
          <a href="https://github.com/katwar15" style={{ color: "#2FBB4F" }}>
            <b>Github</b>
          </a>{" "}
          or{" "}
          <a style={{ color: "#1769ff" }} href="https://github.com/katwar15">
            <b>Behance</b>
          </a>
          . <br></br>
          Bon Appetit!
        </p>
      </div>
      <div className="portfolioContainer">
        {portfolioLinks.map((project, index) => {
          return (
            <Column
              to={project.to}
              index={index}
              title={project.title}
              subtitle={project.subtitle}
              setModal={setModal}
              key={index}
            />
          );
        })}
        <Modal modal={modal} portfolioLinks={portfolioLinks}></Modal>
      </div>
    </>
  );
};

export default Portfolio;
