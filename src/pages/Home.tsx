import React from "react";
import { useScrollToTopAndNavigate } from "../hooks/scrollToTopAndNavigate";
import "../scss/Home.scss";
import Lubos from "../assets/lubos-kruh.webp";
import image1 from "../assets/images/7.jpg";
import image2 from "../assets/images/1.jpg";
import image3 from "../assets/images/24.jpg";
import image4 from "../assets/images/27.jpg";
import FullscreenImage from "../components/FullscreenImage";
import Footer from "../components/Footer";
import "../scss/components/gallery-component.scss";
import ScrollDown from "../components/ScrollDown";
import image22 from "../assets/images/22.jpg";



const Home: React.FC = () => {
	const scrollToTopAndNavigate = useScrollToTopAndNavigate();

	return (
		<div className="page-container">
			<ScrollDown/>
			<div className="intro">
				<div className="intro-text">
				<h2><span>Lubomír Kučera</span></h2>
					<p id="courier">řezbář naivního umění</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae volutpat libero. Fusce pellentesque in urna pellentesque eleifend. Mauris rhoncus eleifend nisl quis efficitur. Sed in mi et nisi blandit pellentesque vitae et orci. Ut ex tortor, gravida nec dui et, dignissim tempus risus. Nullam sit amet libero ex.</p>
				</div>
				<img src={Lubos} alt="Lubomír Kučera" />
			</div>
			<div className="my-work">
			<h2><span>Moje Tvorba</span></h2>
				<div className="gallery-flex">
					<div className="gallery-column">
						<FullscreenImage src={image1} alt="Description of image 1" />
						<FullscreenImage src={image2} alt="Description of image 2" />
					</div>
					<div className="gallery-column">
						<FullscreenImage src={image3} alt="Description of image 3" />
						<FullscreenImage src={image4} alt="Description of image 4" />
						<FullscreenImage src={image22} alt="Description of image 22" />
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
