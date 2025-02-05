import React, { useState } from "react";

interface FullscreenImageProps {
	src: string;
	alt: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [tilt, setTilt] = useState({ x: 0, y: 0 });

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
		const { clientX, clientY, currentTarget } = e;
		const { left, top, width, height } = currentTarget.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;

		const deltaX = clientX - centerX;
		const deltaY = clientY - centerY;

		const tiltX = (deltaY / (height / 2)) * 2; // Adjust the multiplier for tilt strength
		const tiltY = (deltaX / (width / 2)) * -2; // Adjust the multiplier for tilt strength

		setTilt({ x: tiltX, y: tiltY });
	};

	const handleMouseLeave = () => {
		setTilt({ x: 0, y: 0 }); // Reset tilt when mouse leaves
	};

	const imageStyle = {
		cursor: "pointer",
		maxWidth: "70%",
		height: "auto",
		transition: "transform 0.1s ease", // Faster transition for a more responsive feel
		transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
	};

	return (
		<>
			<div style={{ perspective: "1000px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<img
					src={src}
					alt={alt}
					onClick={toggleFullscreen}
					style={imageStyle}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
				/>
			</div>
			{isFullscreen && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						zIndex: 1000,
					}}
					onClick={toggleFullscreen}
				>
					<img src={src} alt={alt} style={{ maxWidth: "90%", maxHeight: "90%" }} />
				</div>
			)}
		</>
	);
};

export default FullscreenImage;