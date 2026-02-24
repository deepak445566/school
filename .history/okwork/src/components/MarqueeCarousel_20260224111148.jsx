import React, { useState } from 'react';

const MarqueeCarousel = () => {
    const [stopScroll, setStopScroll] = useState(false);
    
    const cardData = [
        {
            title: "Unlock Your Creative Flow",
            image:"/images/lo.jpg",
        },
        {
            title: "Design Your Digital Future",
            image: "/images/lo1.jpg",
        },
        {
            title: "Build with Passion, Ship with Pride",
            image: "/images/lo12.jpg",
        },
        {
            title: "Think Big, Code Smart",
            image: "/images/lo5.jpg",
        },
    ];

    return (
        <>
            <style>{`
                .marquee-inner {
                    animation: marqueeScroll linear infinite;
                }

                @keyframes marqueeScroll {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>

            <div className="overflow-hidden w-full relative max-w-6xl mx-auto" 
                onMouseEnter={() => setStopScroll(true)} 
                onMouseLeave={() => setStopScroll(false)}
            >
                {/* Left Gradient Fade */}
                <div className="absolute left-0 top-0 h-full w lg:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                
                {/* Marquee Content */}
                <div 
                    className="marquee-inner flex w-fit" 
                    style={{ 
                        animationPlayState: stopScroll ? "paused" : "running", 
                        animationDuration: cardData.length * 2500 + "ms" 
                    }}
                >
                    <div className="flex">
                        {[...cardData, ...cardData].map((card, index) => (
                            <div key={index} className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300 cursor-pointer">
                                <img 
                                    src={card.image} 
                                    alt={card.title} 
                                    className="w-full h-full object-cover rounded-lg" 
                                />
                               
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Right Gradient Fade */}
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>
        </>
    );
};

export default MarqueeCarousel;