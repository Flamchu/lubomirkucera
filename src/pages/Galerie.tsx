import React from "react";
import Gallery from "../components/Gallery";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";

const Galerie: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<>
			<section className="title">
				<h1>Fotogalerie</h1>
			</section>

			<main>
				<Gallery />
			</main>

			<div className="btn-holder">
				<button className="btn" onClick={() => scrollToTopAndNavigate("/galerie")}>
					Zpět nahoru
				</button>
			</div>
		</>
	);
};

export default Galerie;
