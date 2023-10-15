import { Link } from "react-router-dom";
import "./Portfolio.css";

const Column = ({ index, title, subtitle, setModal, to }) => {
  return (
    <Link
      to={to}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="columnContainer"
    >
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Link>
  );
};

export default Column;
