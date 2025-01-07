'use client'

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import devsoc from '../assets/images/DEVSOC.png';
import HomeRIve from './HomeRIve';

interface HomePageProps {
    backgroundImage: StaticImageData;
    mascotPeekImage: StaticImageData;
}

const HomePage: React.FC<HomePageProps> = ({ backgroundImage, mascotPeekImage }) => {
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
                        <div className="max-w-7xl mx-auto px-4 flex justify-around items-center">
                            <AnimatedButton
                                text="Discord"
                                mascotImage={mascotPeekImage}
                                className="w-24 sm:w-32 md:w-40"
                            />

                            <div className="flex items-center">
                                <span className="text-9xl mt-2 sm:text-4xl md:text-6xl text-[#FF7657] font-yerk tracking-wider relative">
                                    {/* Splitting the text into individual letters */}
                                    <span className="letter-shadow-wrapper">
                                        {
                                            "DEVSOC".split("").map((letter, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-block relative"
                                                    style={{
                                                        textShadow: `2px 2px 4px rgba(0,0,0,0.5)`,
                                                    }}
                                                >
                                                    {letter}
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                                <span
                                    className="font-bold text-sm sm:text-base md:text-xl text-[#FF6B6B] font-mono ml-1 sm:ml-2"
                                    style={{
                                        writingMode: 'vertical-rl',
                                        textOrientation: 'mixed',
                                        transform: 'rotate(360deg)'
                                    }}
                                >
                                    2k25
                                </span>
                            </div>

                            <AnimatedButton
                                text="Register"
                                mascotImage={mascotPeekImage}
                                className="w-24 sm:w-32 md:w-40"
                                icon={devsoc}
                            />
                        </div>
                    </div>

                    <div className="w-full h-1 bg-white" />
                </div>

                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6 md:py-8">
                    <div className="flex flex-col items-center justify-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] relative">
                        {/* <div className="absolute top-8 sm:top-12 md:top-16 left-4 sm:left-8 md:left-16 text-[#FF7657] text-3xl sm:text-4xl md:text-6xl font-mono" style={{ fontFamily: 'var(--font-game)' }}>
                            LEARN.
                        </div>

                    
                        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] mx-auto">
                            <div className="absolute inset-0 rounded-full border-[4px] sm:border-[5px] md:border-[6px] border-white">
                                <div className="absolute inset-[0px] rounded-full bg-[#FFB800]">
                                    <CircularText />
                                    <div className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px] sm:top-[60px] sm:left-[60px] sm:right-[60px] sm:bottom-[60px] md:top-[80px] md:left-[80px] md:right-[80px] md:bottom-[80px] rounded-full bg-[#1B4965]"/>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-2 sm:top-3 md:top-4 right-4 sm:right-8 md:right-16 text-[#FF7657] text-3xl sm:text-4xl md:text-6xl font-mono" style={{ fontFamily: 'var(--font-game)' }}>
                            CODE.
                        </div>

                        <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-8 md:right-16 text-[#FF7657] text-3xl sm:text-4xl md:text-6xl font-mono" style={{ fontFamily: 'var(--font-game)' }}>
                            SIMPLIFY.
                        </div> */}
                        <HomeRIve></HomeRIve>
                        <div className="absolute top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 text-white text-base sm:text-xl md:text-2xl">
                            Sponsor Information Here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


// const CircularText = () => {
//     const text = ". DEVSOC'25 . DEVSOC'25 ";
//     const characters = text.split('');

//     return (
//         <div className="absolute inset-[6px] rounded-full">
//             {characters.map((char, i) => {
//                 const radius = window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 150 : 180;
//                 const angle = (i * (360 / characters.length) - 90) * (Math.PI / 180);
//                 const x = radius + radius * Math.cos(angle);
//                 const y = radius + radius * Math.sin(angle);

//                 return (
//                     <div
//                         key={i}
//                         className="absolute text-black font-bold text-2xl ml-8 mt-8 sm:text-3xl md:text-5xl transform -translate-x-1/2 -translate-y-1/2"
//                         style={{
//                             left: `${x}px`,
//                             top: `${y}px`,
//                             transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI) + 90}deg)`,
//                             fontFamily: 'var(--font-game)'
//                         }}
//                     >
//                         {char}
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

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
                    initial: { y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' },
                    hover: { y: 2, boxShadow: 'none' },
                }}
            >
                <motion.div
                    className="flex items-center justify-center relative z-10 overflow-hidden"
                    style={{ height: "1.5rem" }}
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
                    <span className={`text-white font-mono sm:text-base md:text-lg ${text === 'discord' ? 'lowercase' : ''}`}>
                        {text}
                    </span>
                </motion.div>

                <motion.div
                    className="absolute left-0 right-0 bottom-0 overflow-hidden"
                    style={{ height: 'calc(2rem + 1px)' }}
                    variants={{
                        initial: { y: "calc(100% - 1px)", scale: 0.6, opacity: 1 },
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