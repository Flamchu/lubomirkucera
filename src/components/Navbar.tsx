import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const location = useLocation();

	const routes: Record<"/" | "/galerie" | "/kontakt", { to: string; label: string }[]> = {
		"/": [
			{ to: "/galerie", label: "Galerie" },
			{ to: "/kontakt", label: "Kontakt" },
		],
		"/galerie": [
			{ to: "/", label: "Domů" },
			{ to: "/kontakt", label: "Kontakt" },
		],
		"/kontakt": [
			{ to: "/", label: "Domů" },
			{ to: "/galerie", label: "Galerie" },
		],
	};

	const links = routes[location.pathname as "/" | "/galerie" | "/kontakt"] || [];

	return (
		<nav className="navbar">
			<ul>
				{links.map((link) => (
					<li key={link.to}>
						<Link to={link.to}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
