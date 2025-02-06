import Footer from "../components/Footer";
import React from "react";
import "../scss/Contact.scss";
import { Helmet } from "react-helmet-async";
import image17 from "../assets/images/17.jpg"
import email from "../assets/email.png"
import phone from "../assets/telephone.png"
import address from "../assets/location.png"

const Contact: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Kontakt - Lubomír Kučera</title>
				<meta name="description" content="Get in touch with us via phone, email, or visit our office." />
			</Helmet>
			<div className="gallery-intro">
				<div className="intro-text">
					<h2>
						<span>Kontakt</span>
					</h2>
				</div>
			</div>
			<div className="contact-flexcont">	
			<div className="contact-container">
				<h1>Kontaktujte mě</h1>
				<p>Líbí se Vám moje tvorba? Napište mi mail nebo volejte!</p>

				<div className="contact-details">
					<div className="contact-item">
					<img src={phone} alt="" />
					<a href="tel:+420732650305">+420 732 650 305</a>
					</div>
					<div className="contact-item">
						<img src={email} alt="" />
						<a href="mailto:luboskucera69@seznam.cz">luboskucera69@seznam.cz</a>
					</div>
					<div className="contact-item">
					<img src={address} alt="" />
					<a href="https://g.co/kgs/HgP34z9"> Petrkov 5, 580 01 Havlíčkův Brod</a>
					</div>
				</div>
			</div>
			<div className="divider"></div>
			<div className="contact-container">
			<img src={image17} alt="Obrázek" />
			</div>
			</div>
			<Footer />
		</>
	);
};

export default Contact;
