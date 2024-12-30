'use client'

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface SlantedBannerProps {
    starsImageUrl: StaticImageData;
    className?: string;
}

const SlantedBanner: React.FC<SlantedBannerProps> = ({ starsImageUrl, className = '' }) => {
    const { scrollY } = useScroll();

    const devsocX = useTransform(scrollY, [0, 500], [0, -100], { clamp: false });
    const sponsorX = useTransform(scrollY, [0, 500], [0, 100], { clamp: false });
    const starsX = useTransform(scrollY, [0, 500], [0, 100], { clamp: false });

    const fullText = Array(40).fill(' DEVSOC 2K25').join(' ');
    const sponsorText = Array(40).fill('Sponsored by SPONSOR').join(' • ');

    return (
        <div
            className={`relative w-[140%] h-[180px] sm:h-[220px] md:h-[280px] overflow-hidden ${className}`}
            style={{
                transform: 'rotate(8deg) scale(1.4)',
                backgroundColor: '#E9DECF',
            }}
        >
            {/* Stars layer */}
            <div className="absolute inset-0 flex h-[30%]">
                <motion.div
                    className="flex whitespace-nowrap h-full"
                    style={{ x: starsX }}
                >
                    {[...Array(16)].map((_, index) => (
                        <div key={index} className="flex-shrink-0 h-full aspect-[3/1]">
                            <div className="relative w-full h-full">
                                <Image
                                    src={starsImageUrl}
                                    alt="Stars pattern"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute w-full top-[30%] border-t-2 border-dashed border-orange-400 opacity-70" />

            {/* DEVSOC text layer */}
            <div className="absolute inset-0 flex items-center">
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ x: devsocX, width: '800%' }}
                >
                    <span className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider inline-block text-[#FF6B6B]">
                        {fullText.split(" ").map((text, index) => (
                            <React.Fragment key={index}>
                                <span className="inline-block">
                                    {text === "DEVSOC" ? text :
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider align-middle ml-1 sm:ml-2 md:ml-4">
                                            {text}
                                        </span>
                                    }
                                    {index !== fullText.split(" ").length - 1 && ' '}
                                </span>
                            </React.Fragment>
                        ))}
                    </span>
                </motion.div>
            </div>

            <div className="absolute w-full bottom-[30%] border-t-2 border-dashed border-orange-400 opacity-70" />

            {/* Sponsor text layer */}
            <div className="absolute inset-0 flex items-center pt-32 sm:pt-40 md:pt-48">
                <motion.div
                    className="flex whitespace-nowrap"
                    style={{ x: sponsorX, width: '800%' }}
                >
                    <span className="text-sm sm:text-base md:text-xl font-medium tracking-wide inline-block w-full text-[#FF6B6B]">
                        {sponsorText}
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default SlantedBanner;