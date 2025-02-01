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

	return (
		<>
			<img 
				src={src} 
				alt={alt} 
				onClick={toggleFullscreen} 
				style={{ cursor: "pointer", maxWidth: "70%", height: "auto" }} 
			/>
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
					<img 
						src={src} 
						alt={alt} 
						style={{ maxWidth: "90%", maxHeight: "90%" }} 
					/>
				</div>
			)}
		</>
	);
};

export default FullscreenImage;
