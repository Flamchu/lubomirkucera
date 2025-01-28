import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import "./App.scss";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
	return (
		<>
			<div className="app-container">
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
