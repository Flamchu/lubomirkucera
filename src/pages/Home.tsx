import React from "react";
import { Link } from "react-router-dom";
import "../scss/Home.scss"
import Lubos from "../assets/Lubos.png"

const Home: React.FC = () => {
  return (
    <div>
      <div className="slanted-section">
        <img src={Lubos} alt="Lubomír Kučera" />
        <h1>Lubomír Kučera</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
