import React from "react";
import FullscreenImage from "./FullscreenImage";
import "../scss/components/gallery-component.scss";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import image10 from "../assets/images/10.jpg";
import image11 from "../assets/images/11.jpg";
import image12 from "../assets/images/12.jpg";
import image13 from "../assets/images/13.jpg";
import image14 from "../assets/images/14.jpg";
import image15 from "../assets/images/15.jpg";
import image16 from "../assets/images/16.jpg";
import image17 from "../assets/images/17.jpg";
import image18 from "../assets/images/18.jpg";
import image19 from "../assets/images/19.jpg";
import image20 from "../assets/images/20.jpg";
import image21 from "../assets/images/21.jpg";
import image22 from "../assets/images/22.jpg";
import image23 from "../assets/images/23.jpg";
import image24 from "../assets/images/24.jpg";
import image25 from "../assets/images/25.jpg";
import image26 from "../assets/images/26.jpg";
import image27 from "../assets/images/27.jpg";
import image28 from "../assets/images/28.jpg";
import image29 from "../assets/images/29.jpg";
import image30 from "../assets/images/30.jpg";
import image31 from "../assets/images/31.jpg";

const Gallery: React.FC = () => {
	return (
		<div className="gallery">
			<div className="gallery-flex">
				<div className="gallery-column">
					<FullscreenImage src={image1} alt="Description of image 1" />
					<FullscreenImage src={image2} alt="Description of image 2" />
					<FullscreenImage src={image3} alt="Description of image 3" />
					<FullscreenImage src={image4} alt="Description of image 4" />
					<FullscreenImage src={image5} alt="Description of image 5" />
					<FullscreenImage src={image6} alt="Description of image 6" />
					<FullscreenImage src={image7} alt="Description of image 7" />
					<FullscreenImage src={image8} alt="Description of image 8" />
					<FullscreenImage src={image9} alt="Description of image 9" />
					<FullscreenImage src={image10} alt="Description of image 10" />
				</div>
				<div className="gallery-column">
					<FullscreenImage src={image12} alt="Description of image 12" />
					<FullscreenImage src={image13} alt="Description of image 13" />
					<FullscreenImage src={image14} alt="Description of image 14" />
					<FullscreenImage src={image15} alt="Description of image 15" />
					<FullscreenImage src={image16} alt="Description of image 16" />
					<FullscreenImage src={image17} alt="Description of image 17" />
					<FullscreenImage src={image18} alt="Description of image 18" />
					<FullscreenImage src={image19} alt="Description of image 19" />
					<FullscreenImage src={image20} alt="Description of image 20" />
					<FullscreenImage src={image21} alt="Description of image 21" />
					
				</div>
				<div className="gallery-column">
					<FullscreenImage src={image22} alt="Description of image 22" />
					<FullscreenImage src={image23} alt="Description of image 23" />
					<FullscreenImage src={image24} alt="Description of image 24" />
					<FullscreenImage src={image25} alt="Description of image 25" />
					<FullscreenImage src={image26} alt="Description of image 26" />
					<FullscreenImage src={image27} alt="Description of image 27" />
					<FullscreenImage src={image28} alt="Description of image 28" />
					<FullscreenImage src={image29} alt="Description of image 29" />
					<FullscreenImage src={image30} alt="Description of image 30" />
					<FullscreenImage src={image31} alt="Description of image 31" />
					<FullscreenImage src={image11} alt="Description of image 11" />

				</div>
			</div>
		</div>
	);
};

export default Gallery;
