import React, { useState, useEffect } from "react";
import "../scss/components/Susenky.scss";

const CookieConsent: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (!consent) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "true");
		setIsVisible(false);
	};

	const handleDecline = () => {
		localStorage.setItem("cookieConsent", "false");
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="cookie-consent">
			<p className="cookie-consent__text">Pro analytické účely, k sledování jedinečných návštěvníků používáme soubory cookie. Kliknutím na tlačítko „Souhlasím“ s tímto sledováním souhlasíte.</p>
			<div className="cookie-consent__buttons">
				<button onClick={handleDecline} className="cookie-consent__button cookie-consent__button--decline">
					Nesouhlasím
				</button>
				<button onClick={handleAccept} className="cookie-consent__button cookie-consent__button--accept">
					Souhlasím
				</button>
			</div>
		</div>
	);
};

export default CookieConsent;
