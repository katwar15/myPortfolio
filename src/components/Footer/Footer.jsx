import "./Footer.css";

import mailIcon from "/src/assets/mail.svg";
import { footerIcons } from "../../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="containerContact">
        <h1 className="h1_Contact">Contact</h1>
        <footer className="gridFooter">
          <div id="iconT">
            <a href="mailto:natasza.warmuz@gmail.com">
              <img className="iconSMail" src={mailIcon} />
            </a>
          </div>
          <div id="textTele">
            <a href="mailto:natasza.warmuz@gmail.com" className="contactH1mail">
              <p className="contactPmail">natasza.warmuz@gmail.com</p>
            </a>
          </div>
          <div id="mail">MAIL</div>
          <div id="iconS">
            {footerIcons.map((e) => (
              <Link to={e.to} key={e}>
                <img src={e.icon} className="iconS" />
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
