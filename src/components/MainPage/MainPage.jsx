// import React from "react";
// import styles from "../../style";
import { Link } from "react-router-dom";
import { mainLinks } from "../../constants/index.jsx";

const MainPage = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div>
        <ul>
          {mainLinks.map((e) => (
            <li
              key={e.id}
              className="font-helveticaBold flex justify-items-center"
            >
              <Link to="/.">{e.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>katarzyna warmuz</h1>
        <div className="flex justify-start items-center">
          <h2>ui / ux</h2>
          <h2 className="font-helveticaBold ">designer</h2>
        </div>
        <div className="flex justify-start items-center">
          <h2 className="font-helveticaBold ">frontend</h2>
          <h2>developer</h2>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
