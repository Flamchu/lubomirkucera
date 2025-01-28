import React from "react";
import Gallery from "../components/Gallery";
import "../scss/components/gallery.scss";

const Galerie: React.FC = () => {
	return (
		<>
			<section className="title">
				<h1>Fotogalerie</h1>
			</section>

			<main>
				<Gallery />
			</main>
		</>
	);
};

export default Galerie;
