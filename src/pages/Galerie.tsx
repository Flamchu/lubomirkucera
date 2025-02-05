import React from "react";
import Gallery from "../components/Gallery";
import "../scss/components/backToTopButton.scss";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import "../scss/components/gallery.scss";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";


const Galerie: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<>
		<Helmet>
			<title>Galerie - Lubomír Kučera</title>
			<meta name="description" content="Get in touch with us via phone, email, or visit our office." />
		</Helmet>
			<div className="gallery-intro">
				<div className="intro-text">
				<h2><span>Galerie</span></h2>
				</div>
			</div>

			<main>
				<Gallery />
			</main>

			<button className="back-to-top-button show" id="backToTop" onClick={() => scrollToTopAndNavigate("/galerie")}>
				<svg className="svgIcon" viewBox="0 0 384 512">
					<path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
				</svg>
			</button>

			<Footer />
		</>
	);
};

export default Galerie;
