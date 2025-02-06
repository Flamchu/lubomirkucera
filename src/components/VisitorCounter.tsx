import { useEffect, useState } from "react";
import people_img from "../assets/people.png";

const API_URL = "/api/counter.php";

const VisitorCounter = () => {
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (consent === "true") {
			fetch(API_URL)
				.then((res) => res.json())
				.then((data) => setCount(data.count))
				.catch((err) => console.error("Error fetching count:", err));
		}
	}, []);

	return (
		<div className="footer__visitor-counter">
			<img src={people_img} alt="Visitors" />
			<p>{count ?? (localStorage.getItem("cookieConsent") === "false" ? "Tracking disabled" : "Loading...")}</p>
		</div>
	);
};

export default VisitorCounter;
