import React from "react";
import "../scss/components/Footer.scss";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import VisitorCounter from "./VisitorCounter";

const Footer: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__flex">
					<div className="footer__ul-holder">
						<ul>
							<li onClick={() => scrollToTopAndNavigate("/")}>Domů</li>
							<li onClick={() => scrollToTopAndNavigate("/galerie")}>Celá Fotogalerie</li>
							<li onClick={() => scrollToTopAndNavigate("/kontakt")}>Kontakt</li>
						</ul>
					</div>

					<div className="footer__ul-holder">
						<ul>
							<li>+420 732 000 000</li>
							<li>luboskucera69@seznam.cz</li>
						</ul>
					</div>
				</div>
				<div className="footer__webweave">
					<a href="https://webweave.cz">Made by WebWeave.cz</a>
				</div>
			</div>
			<VisitorCounter />
		</footer>
	);
};

export default Footer;
