import React from "react";
import "../scss/components/Footer.scss";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import VisitorCounter from "./VisitorCounter";
import LikeDislike from "./LikeDislike";

const Footer: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__flex">
					<div className="footer__ul-holder">
						<ul>
							<li>
								<p className="footer__darker-text">Navigace</p>
							</li>
							<li>
								<span className="footer__link" onClick={() => scrollToTopAndNavigate("/")}>
									Domů
								</span>
							</li>
							<li>
								<span className="footer__link" onClick={() => scrollToTopAndNavigate("/galerie")}>
									Celá Fotogalerie
								</span>
							</li>
							<li>
								<span className="footer__link" onClick={() => scrollToTopAndNavigate("/kontakt")}>
									Kontakt
								</span>
							</li>
						</ul>
					</div>

					<div className="footer__ul-holder">
						<ul>
							<li>
								<p className="footer__darker-text">Kontakt</p>
							</li>
							<li>
								<a href="tel:+420732650305">+420 732 650 305</a>
							</li>
							<li>
								<a href="mailto:luboskucera69@seznam.cz">luboskucera69@seznam.cz</a>
							</li>
							<li>
								<span>Petrkov 5, 580 01 Havlíčkův Brod</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__ul-holder">
						<ul>
							<li>
								<p className="footer__darker-text-bottom">Vytvořil:</p>
							</li>
							<li>
								<a href="https://webweave.cz">WebWeave.cz</a>
							</li>
						</ul>
					</div>

					<LikeDislike />

					<VisitorCounter />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
