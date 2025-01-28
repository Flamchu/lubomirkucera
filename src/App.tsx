import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import "./App.scss"

const App: React.FC = () => {
  return (
    <div className="app-container">
      
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Domů</Link>
          </li>
          <li>
            <Link to="/galerie">Galerie</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
