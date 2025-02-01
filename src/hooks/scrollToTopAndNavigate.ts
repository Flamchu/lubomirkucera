import { useNavigate } from "react-router-dom";

export const useScrollToTopAndNavigate = () => {
	const navigate = useNavigate();

	return (path: string) => {
		const isMobile = window.innerWidth <= 768;
		const [basePath, hash] = path.split("#"); // Separate path and hash

		// Scroll to top before navigation
		window.scrollTo({
			top: 0,
			behavior: isMobile ? "smooth" : "auto",
		});

		// Navigate to the target element on a page
		const scrollToHash = () => {
			if (hash) {
				const element = document.querySelector(`#${hash}`);
				if (element) {
					element.scrollIntoView({ behavior: "smooth" });
				}
			}
		};

		if (isMobile) {
			setTimeout(() => {
				navigate(basePath, { replace: true });
				setTimeout(scrollToHash, 100);
			}, 200);
		} else {
			navigate(basePath, { replace: true });
			setTimeout(scrollToHash, 100);
		}
	};
};
