import React from "react";
import "../scss/Home.scss";
import Lubos from "../assets/Lubos.png";
import image1 from "../assets/wd1.webp";
import image2 from "../assets/wd2.webp";
import image3 from "../assets/wd3.webp";
import image4 from "../assets/wd4.webp";

const Home: React.FC = () => {
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
				<img src={image1} alt="" />
				<img src={image2} alt="" />
				<img src={image3} alt="" />
				<img src={image4} alt="" />
			</div>
		</div>
	);
};

export default Home;
