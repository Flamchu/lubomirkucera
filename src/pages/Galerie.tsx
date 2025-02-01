import React from "react";
import Gallery from "../components/Gallery";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import "../scss/components/gallery.scss"
import Footer from "../components/Footer";


const Galerie: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<>
			<div className="gallery-intro">
				<div className="intro-text">
					<h1>Galerie</h1>
				</div>
			</div>

			<main>
				<Gallery />
			</main>

			<div className="btn-holder">
				<button className="btn" onClick={() => scrollToTopAndNavigate("/galerie")}>
					Zpět nahoru
				</button>
			</div>
			<Footer/>
		</>
	);
};

export default Galerie;
