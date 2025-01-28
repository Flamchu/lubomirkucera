import React from "react";
import {Link} from "react-router-dom";
import "../scss/components/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__flex">
        <div className="footer__ul-holder">
            <ul>
            <li><Link to="/">Domů</Link></li>
            <li><Link to="/galerie">Celá Fotogalerie</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
        </div>
        <div className="footer__ul-holder">
            <ul>
                <li>+420 732 000 000</li>
                <li>luboskucera69@seznam.cz</li>
            </ul>
        </div>
        </div>
        <div className="footer__webweave"><a href="https://webweave.cz">Made by WebWeave.cz</a></div>
      </div>
    </footer>
  );
};

export default Footer;
