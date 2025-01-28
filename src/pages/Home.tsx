import React from "react";
import {Link} from "react-router-dom";
import "../scss/Home.scss"
import Lubos from "../assets/Lubos.png"
import image1 from "../assets/wd1.webp"
import image2 from "../assets/wd2.webp"
import image3 from "../assets/wd3.webp"
import image4 from "../assets/wd4.webp"
import FullscreenImage  from "../components/FullscreenImage";



const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="intro">
        
        <div className="intro-text">
        <h1>Lubomír Kučera</h1>
        <p>řezbář naivního umění</p>
        </div>
        <img src={Lubos} alt="Lubomír Kučera" />
      </div>
      <div className="my-work">
        <h1>Moje tvorba</h1>
        <div className="flex">        
        <FullscreenImage src={image1} alt="Description of image 1" />
        <FullscreenImage src={image2} alt="Description of image 2" />
        </div>
        <div className="flex">        
        <FullscreenImage src={image3} alt="Description of image 3" />
        <FullscreenImage src={image4} alt="Description of image 4" />
        </div>
     </div>
     <div className="btn-holder">
     <Link to="/galerie"><button className="btn">Celá Fotogalerie</button></Link>
     </div>
     
    </div>
  );
};

export default Home;
