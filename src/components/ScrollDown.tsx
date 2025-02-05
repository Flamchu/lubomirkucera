import React from 'react';
import "../scss/components/ScrollDown.scss"; 

const ScrollDown: React.FC = () => {
    const scrollToNextSection = () => {
        const nextSection = window.innerHeight; // You can adjust this value to scroll to a specific section
        const start = window.scrollY;
        const distance = nextSection - start;
        const duration = 1000; // Duration in milliseconds
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress does not exceed 1
            const ease = easeInOutQuad(progress); // Easing function for smoothness

            window.scrollTo(0, start + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        const easeInOutQuad = (t: number) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        requestAnimationFrame(animation);
    };
  
    return (
        <div className="scrolldown" style={{ '--color': 'gray' } as React.CSSProperties} onClick={scrollToNextSection}>
            <div className="chevrons">
                <div className="chevrondown"></div>
                <div className="chevrondown"></div>
            </div>
        </div>
    );
};
  
export default ScrollDown;