import "./Footer.css";
import {
  FaBehanceSquare,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="containerContact">
        <h1 className="h1_Contact">Contact</h1>
        <footer className="gridFooter">
          <div id="iconT">
            <a href="mailto:natasza.warmuz@gmail.com" className="contactH1">
              <FaEnvelope className="iconS" />
            </a>
          </div>
          <div id="textTele">
            <a href="mailto:natasza.warmuz@gmail.com" className="contactH1mail">
              natasza.warmuz@gmail.com
            </a>
          </div>
          <div id="mail">MAIL</div>
          <div id="iconS">
            <a href="https://github.com/katwar15">
              <FaGithub className="iconS" />
            </a>

            <a href="https://www.behance.net/katarzynawarmuz">
              <FaBehanceSquare className="iconS" />
            </a>

            <a href="https://www.linkedin.com/in/katarzyna-warmuz-631364230/">
              <FaLinkedin className="iconS" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
