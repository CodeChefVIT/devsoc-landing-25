"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface SlantedBannerProps {
  starsImageUrl: StaticImageData;
  className?: string;
  sign: string;
}

const SlantedBanner: React.FC<SlantedBannerProps> = ({
  starsImageUrl,
  className = "",
  sign,

}) => {
  const bruceBanner = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [startScroll, setStartScroll] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      if (bruceBanner.current) {
        const bannerRect = bruceBanner.current.getBoundingClientRect();
        setStartScroll(window.scrollY + bannerRect.top);
      }
    };
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // Initial check on mount
    handleScroll();
    window.addEventListener("resize", handleResize); // Check on resize
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    }; // Cleanup
  }, []);
  const relativeScroll = useTransform(
    scrollY,
    (current) => current - startScroll
  );
  const starOuput = isMobile ? [-200, -100] : [0, 100];
  const devsocOutput = isMobile ? [-100, -200] : [0, -100];
  const sponsorX = useTransform(relativeScroll, [0, 500], starOuput, {
    clamp: false,
  });
  const devsocX = useTransform(relativeScroll, [0, 500], devsocOutput, {
    clamp: false,
  });
  const starsX = useTransform(relativeScroll, [0, 500], starOuput, {
    clamp: false,
  });

  const fullText = Array(40).fill(" DEVSOC 2K25").join(" ");
  const sponsorText = Array(40).fill("Sponsored by SPONSOR").join(" • ");

  return (
    <div className="h-0 relative flex items-center mt-16">
      <div
        ref={bruceBanner}
        className={`absolute  z-10 w-[150%] h-[180px] sm:h-[220px] md:h-[340px] overflow-hidden ${className}`}
        style={{
          transform: `rotate(${sign}8deg) scale(1.4)`,
          backgroundColor: "#E9DECF",
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

        <div className="absolute w-full top-[30%] border-t-2 border-dashed border-[#FF9737] opacity-70" />

        {/* DEVSOC text layer */}
        <div className="absolute inset-0 flex items-center">
          <motion.div
            className="flex whitespace-nowrap"
            style={{ x: devsocX, width: "800%" }}
          >
           <span className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider inline-block text-[#FF7657]">
              {fullText.split(" ").map((text, index) => (
                <React.Fragment key={index}>
                  <span className="inline-block relative">
                    {text === "DEVSOC" ? (
                      <span className="font-yerk">{text}</span>
                    ) : text === "2K25" ? (
                       <span className="font-yerk text-2xl md:text-3xl  relative  md:-top-3 -top-1">
                        {text.split("").map((char, i) => (
                            <span key={i} style={{ color: char === "K" ? "#FF9737" : "#FF7657" }}>
                                {char}
                            </span>
                        ))}
                       </span>
                    ) : (
                      <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider align-middle ml-1 sm:ml-2 md:ml-4">
                        {text}
                      </span>
                    )}
                      {index !== fullText.split(" ").length - 1 && " "}
                 </span>
                </React.Fragment>
              ))}
            </span>
          </motion.div>
        </div>

        <div className="absolute w-full bottom-[30%] border-t-2 border-dashed border-[#FF9737] opacity-70" />

        {/* Sponsor text layer */}
        <div className="absolute inset-0 flex items-center pt-32 sm:pt-40 md:pt-48">
          <motion.div
            className="flex whitespace-nowrap"
            style={{ x: sponsorX, width: "800%" }}
          >
            <span className="text-sm sm:text-base md:text-xl font-medium tracking-wide inline-block w-full text-[#FF7657]">
              <span className="font-mono">{sponsorText}</span>
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SlantedBanner;