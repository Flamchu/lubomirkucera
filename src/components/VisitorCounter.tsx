import { useEffect, useState } from "react";

const API_URL = "/api/counter.php";

const VisitorCounter = () => {
	const [count, setCount] = useState<number | null>(null);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setCount(data.count))
			.catch((err) => console.error("Error fetching count:", err));
	}, []);

	return (
		<div className="footer__ul-holder">
			<p>Počet návštěvníků: {count ?? "Načítám..."}</p>
		</div>
	);
};

export default VisitorCounter;
