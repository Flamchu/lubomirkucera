import React from "react";
import FullscreenImage from "./FullscreenImage";

const images = Object.values(import.meta.glob("../assets/*.{png,jpg,jpeg,gif,svg}", { eager: true })) as { default: string }[];

const Gallery: React.FC = () => {
	return (
		<div className="gallery-wrapper">
			{images.map((image, index) => (
				<FullscreenImage key={index} src={image.default} alt={`Image ${index + 1}`} wrapper="gallery-img-wrapper" />
			))}
		</div>
	);
};

export default Gallery;
