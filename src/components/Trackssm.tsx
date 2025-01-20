"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TracksMobile: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const buttonContent: { [key: string]: { title: string; description: string } } = {
        'Media and Entertainment': {
      title: 'Media and Entertainment',
      description: "Dive into the world of creativity and innovation in media and entertainment. Build solutions that redefine how content is created, consumed, and shared. Whether it's immersive AR/VR experiences, AI-generated content, personalized streaming platforms, or innovative storytelling tools, your ideas can reshape the future of entertainment."
    },
    'Finance and Fintech': {
      title: "Finance and Fintech",
      description: 'Empower the financial sector with groundbreaking solutions. Develop applications that revolutionize digital banking, payment systems, cryptocurrency, and financial literacy. Whether you’re enhancing security, promoting financial inclusion, or creating tools for investment and budgeting, this track is all about reshaping the future of money.'
    },
    'Healthcare and Education': {
      title: 'Healthcare and Education',
      description: 'Combine the power of technology with compassion and knowledge to create impactful solutions. In healthcare, innovate ways to improve patient care, diagnosis, and accessibility. In education, craft tools that enhance learning experiences, increase inclusivity, or gamify knowledge acquisition. Your solutions can bridge gaps and make essential services more accessible to everyone.'
    },
    'Digital Security': {
      title: 'Digital Security',
      description: 'In an increasingly connected world, digital security is more critical than ever. Build tools and systems that protect sensitive data, combat cyber threats, and ensure privacy. From secure authentication methods to innovative threat detection, this track challenges you to safeguard the digital future.'
    },
    'Environment and Sustainability': {
      title: 'Environment and Sustainability',
      description: 'Leverage technology to tackle environmental challenges and promote sustainability. Create solutions that reduce waste, optimize energy consumption, or monitor environmental impact. Whether it’s through smart agriculture, renewable energy innovations, or eco-conscious applications, your ideas can help pave the way for a greener future.'
    },
    'Open Innovation': {
      title: 'Open Innovation',
      description: 'Think outside the box and break free from predefined boundaries. This track encourages you to explore uncharted territories, bringing any unique, impactful idea to life. If you have an out-of-the-ordinary solution that doesn’t fit into the other tracks, this is your space to shine.'
    },
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

            <div className={`absolute top-0 -left-1/3 w-[150%] h-full opacity-20 z-10 bg-cover bg-center bg-no-repeat scale-150 transition-all duration-300 ${isPopupVisible ? 'blur-sm' : ''}`}
                style={{ backgroundImage: "url('/trackk.svg')" }} />

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

            {isPopupVisible && activeButton && (
                <>
                    <div className="fixed inset-0 bg-[#4B5862] bg-opacity-70 backdrop-blur-sm z-[999]" />
                    <div
                        ref={popupRef}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[342px] h-[700px] z-[1000]"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.5 : 1 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full bg-[#4B5862] rounded-xl border-8 border-[#FFCE00] flex flex-col"
                        >
                             <div className="absolute top-4 left-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute top-4 right-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute bottom-4 left-4 w-4 h-4 bg-[#ffffff] rounded-full" />
                            <div className="absolute bottom-4 right-4 w-4 h-4 bg-[#ffffff] rounded-full" />


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
