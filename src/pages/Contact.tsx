import Footer from "../components/Footer";
import React from "react";
import "../scss/components/contact.scss"
import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {
	return (
		<>
			 <Helmet>
                <title>Kontakt - Lubomír Kučera</title>
                <meta name="description" content="Get in touch with us via phone, email, or visit our office." />
            </Helmet>
			<div className="gallery-intro">
				<div className="intro-text">
					<h1>Kontakt</h1>
				</div>
			</div>
			
            <div className="contact-container">
                <p>Líbí se Vám moje tvorba? Neváhejte mě kontaktovat!</p>

                <div className="contact-details">
                    <div className="contact-item">
                        <strong>Telefon:</strong>
                        <a href="tel:+420732650305">732 650 305</a>

                    </div>
                    <div className="contact-item">
                        <strong>Email:</strong>
                        <a href="mailto:luboskucera69@seznam.cz">luboskucera69@seznam.cz</a>
                    </div>
                    <div className="contact-item">
                        <strong>Adresa:</strong>
                        <span>Petrkov 5, 580 01 Havlíčkův Brod</span>
                    </div>
                </div>
            </div>
			<Footer />
		</>
	);
};

export default Contact;
