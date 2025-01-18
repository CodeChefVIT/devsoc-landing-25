"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TracksMobile: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const buttonContent: { [key: string]: { title: string; description: string } } = {
        'Track 1': { title: 'Open Innovation', description: 'This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and CodeChef is the best innovative club in VIT.' },
        'Track 2': { title: 'Kuchbhi', description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' },
        'Track 3': { title: 'Yaha', description: 'Lorem ipsum dolor sit amet...' },
        'Track 4': { title: 'Daal', description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.' },
        'Track 5': { title: 'Do', description: 'Lorem ipsum dolor sit amet...' },
        'Track 6': { title: 'yaha pe bhi', description: 'Lorem ipsum dolor sit amet...' },
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsPopupVisible(false);
            setActiveButton(null);
            setIsClosing(false);
        }, 300);
    };

    const handleButtonClick = (buttonText: string) => {
        if (isPopupVisible) {
            handleClose();
        } else {
            setActiveButton(buttonText);
            setIsPopupVisible(true);
        }
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
            {/* Background Image */}
            <div className={`absolute top-0 -left-1/3 w-[150%] h-full opacity-20 z-10 bg-cover bg-center bg-no-repeat scale-150 transition-all duration-300 ${isPopupVisible ? 'blur-sm' : ''}`}
                style={{ backgroundImage: "url('/trackk.svg')" }} />

            {/* Content */}
            <div className="z-20 relative mt-5 text-center">
                <h1 className={`text-white font-yerk text-5xl font-normal shadow-red transition-all duration-300 ${isPopupVisible ? 'blur-sm' : ''}`}
                    style={{ textShadow: '2px 2px 10px #994952' }}>
                    Tracks
                </h1>

                <div className="flex flex-col gap-5 mt-5 px-[10%]">
                    {Object.keys(buttonContent).map((buttonText, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(buttonText)}
                            className="w-full py-4 px-5 rounded-xl bg-[#994952] text-white border-none cursor-pointer text-center font-mono text-xl transition-transform duration-300 hover:scale-105"
                        >
                            {buttonText}
                        </button>
                    ))}
                </div>
            </div>

            {/* Popup */}
            {isPopupVisible && activeButton && (
                <>
                    <div className="fixed inset-0 bg-[#4B5862] bg-opacity-70 backdrop-blur-sm z-[999]" />
                    <div
                        ref={popupRef}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[342px] h-[492px] z-[1000]"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.5 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full bg-[#4B5862] rounded-xl border-8 border-[#FFCE00] flex flex-col"
                        >
                            {/* Corner Circles */}
                             <div className="absolute top-4 left-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute top-4 right-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 bg-[#ffffff] rounded-full" />


                            {/* Content */}
                            <div className="flex flex-col justify-center items-center h-full p-8">
                                <div className="flex-1 flex flex-col justify-center items-center overflow-y-auto">
                                    <h2 className="text-white text-center font-yerk text-2xl font-normal mb-6">
                                        {buttonContent[activeButton]?.title}
                                    </h2>
                                    <p className="text-white text-center font-mono text-lg font-normal mb-8 whitespace-pre-line">
                                        {buttonContent[activeButton]?.description}
                                    </p>
                                </div>
                                <div className="p-8 pt-2 flex justify-center">
                                    <button
                                    onClick={handleClose}
                                    className="bg-[#FFCE00] text-[#4B5862] px-8 py-2 rounded font-yerk"
                                    >
                                        CLOSE
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </div>
    );
};

export default TracksMobile;