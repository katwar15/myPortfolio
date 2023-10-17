// import gsap from "gsap";
import { useState } from "react";
import { portfolioLinks } from "../../constants/index.jsx";
import Column from "./Column.jsx";
import "./Portfolio.css";
import Modal from "./Modal/Modal.jsx";

const Portfolio = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <>
      <div className="containerPortfolio">
        <h1 className="h1_portfolio">Portfolio</h1>
        <p className=" p_portfolio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
