import React from "react";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import "../scss/Home.scss";
import Lubos from "../assets/Lubos.png";
import image1 from "../assets/images/7.jpg";
import image2 from "../assets/images/1.jpg";
import image3 from "../assets/images/24.jpg";
import image4 from "../assets/images/27.jpg";
import FullscreenImage from "../components/FullscreenImage";
import Footer from "../components/Footer";
import "../scss/components/gallery-component.scss";
const Home: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<div className="page-container">
			<div className="intro">
				<div className="intro-text">
					<h1>Lubomír Kučera</h1>
					<p>řezbář naivního umění</p>
				</div>
				<img src={Lubos} alt="Lubomír Kučera" />
			</div>
			<div className="my-work">
				<h1>Moje tvorba</h1>
				<div className="gallery-flex">
					<div className="gallery-column">
						<FullscreenImage src={image1} alt="Description of image 1" />
						<FullscreenImage src={image2} alt="Description of image 2" />
					</div>
					<div className="gallery-column">
						<FullscreenImage src={image3} alt="Description of image 3" />
						<FullscreenImage src={image4} alt="Description of image 4" />
					</div>
				</div>
			</div>
			<div className="btn-holder">
				<button className="btn" onClick={() => scrollToTopAndNavigate("/galerie")}>
					Celá Fotogalerie
				</button>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
