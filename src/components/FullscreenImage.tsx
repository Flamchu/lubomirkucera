import React, { useState } from "react";

interface FullscreenImageProps {
	src: string;
	alt: string;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, alt }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	const imageStyle = {
		cursor: "pointer",
		height: "auto",
		transition: "transform 0.1s ease", // Faster transition for a more responsive feel
	};

	return (
		<>
			<div style={{ perspective: "1000px", display: "flex", justifyContent: "center", alignItems: "center" }}>
				<img src={src} alt={alt} onClick={toggleFullscreen} style={imageStyle} />
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
					<img src={src} alt={alt} style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }} />
				</div>
			)}
		</>
	);
};

export default FullscreenImage;
