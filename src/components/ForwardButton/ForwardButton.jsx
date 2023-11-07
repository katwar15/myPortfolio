import { Link } from "react-router-dom";
import "./ForwardButton.css";
import forward_button from "../../assets/Arrow3.svg";

const ForwardButton = () => {
  return (
    <>
      <Link to="/" className="forward_button">
        <img className="forward_img" src={forward_button}></img>
      </Link>
    </>
  );
};

export default ForwardButton;
