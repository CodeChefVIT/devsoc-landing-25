'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import devsoc from '../assets/images/DEVSOC.png';
import HomeRIve from './HomeRIve';
import MobileRive from './MobileRive';

interface HomePageProps {
    backgroundImage: StaticImageData;
    mascotPeekImage: StaticImageData;
}

const HomePage: React.FC<HomePageProps> = ({ backgroundImage, mascotPeekImage }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        handleResize(); // Set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-[#1B4965] overflow-hidden">
            <Image
                src={backgroundImage}
                alt="Background pattern"
                layout="fill"
                className="object-cover opacity-30"
                priority
            />

            <div className="relative z-10 w-full mx-auto top-4 sm:top-6 md:top-10">
                {/* Header Section */}
                <div className="w-full">
                    <div className="w-full h-1 bg-white" />

                    <div className="w-full bg-[#2682A6] py-3 sm:py-4 md:py-6">
                        {/* Responsive Header Container */}
                        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center">
                            <AnimatedButton
                                text="Discord"
                                mascotImage={mascotPeekImage}
                                className="w-24 sm:w-32 md:w-40 mb-2 sm:mb-0"
                            />

                            <div className="flex items-center my-2 sm:my-0">
                                <span className="text-6xl sm:text-4xl md:text-6xl text-[#FF7657] font-yerk tracking-wider relative">
                                    {"DEVSOC".split("").map((letter, index) => (
                                        <span
                                            key={index}
                                            className="inline-block relative"
                                            style={{
                                                textShadow: `2px 2px 4px rgba(0,0,0,0.5)`,
                                            }}
                                        >
                                            {letter}
                                        </span>
                                    ))}
                                </span>
                                <span
                                    className="font-bold text-sm sm:text-base md:text-xl text-[#FF6B6B] font-mono ml-1 sm:ml-2"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        textOrientation: 'mixed',
                                        transform: 'rotate(360deg)',
                                    }}
                                >
                                    2k25
                                </span>
                            </div>

                            <AnimatedButton
                                text="Register"
                                mascotImage={mascotPeekImage}
                                className="w-24 sm:w-32 md:w-40 mb-2 sm:mb-0"
                                icon={devsoc}
                            />
                        </div>
                    </div>

                    <div className="w-full h-1 bg-white" />
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-8">
                    <div className="flex flex-col items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] relative">
                        {isMobile ? <MobileRive /> : <HomeRIve />}
                        {/* <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 text-white text-base sm:text-xl md:text-2xl">
                            Sponsor Information Here
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

interface AnimatedButtonProps {
    text: string;
    mascotImage: StaticImageData;
    className?: string;
    icon?: StaticImageData;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
    text,
    mascotImage,
    className = '',
    icon,
}) => {
    return (
        <motion.div
            className={`relative overflow-hidden cursor-pointer ${className}`}
            whileHover="hover"
            initial="initial"
        >
            <motion.div
                className="bg-[#FF7657] px-1 py-2 sm:py-3 md:py-4 rounded transition-all duration-200 shadow-md"
                variants={{
                    initial: { y: 0, boxShadow: '4px 4px 0px 2px #000' },
                    hover: { y: 2, boxShadow: 'none' },
                }}
            >
                <motion.div
                    className="flex items-center justify-center relative z-10 overflow-hidden"
                    style={{ height: '1.5rem' }}
                    variants={{
                        initial: { y: 0, fontSize: '0.875rem' },
                        hover: { y: -14, fontSize: '0.7rem', marginBottom: '0.8px' },
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {icon && (
                        <Image
                            src={icon}
                            alt="Button Icon"
                            width={12}
                            height={12}
                            className="mr-1 sm:mr-2 w-3 sm:w-4 md:w-5"
                        />
                    )}
                    <span
                        className={`text-white font-mono sm:text-base md:text-lg ${
                            text === 'discord' ? 'lowercase' : ''
                        }`}
                    >
                        {text}
                    </span>
                </motion.div>

                <motion.div
                    className="absolute left-0 right-0 bottom-0 overflow-hidden"
                    style={{ height: 'calc(2rem + 1px)' }}
                    variants={{
                        initial: { y: 'calc(100% - 1px)', scale: 0.6, opacity: 1 },
                        hover: { y: 0, scale: 0.9, opacity: 1 },
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <Image
                        src={mascotImage}
                        alt="Mascot peek"
                        layout="fill"
                        objectFit="contain"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HomePage;
