import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import "./App.scss";
import Navbar from "./components/Navbar";
import CookieConsent from "./components/Susenky";

const App: React.FC = () => {
	return (
		<>
			<Helmet>
				<title>Lubomír Kučera</title>
				<meta name="description" content="This is a global description for my website." />
			</Helmet>
			<div className="app-container">
				<CookieConsent />
				<Navbar />
				<div className="background"></div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/galerie" element={<Galerie />} />
					<Route path="/kontakt" element={<Contact />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
