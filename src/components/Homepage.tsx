"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import devsoc from "../assets/images/DEVSOC.png";
import discord from "../assets/images/discord.svg";

import HomeRIve from "./HomeRIve";
import MobileRive from "./MobileRive";

interface HomePageProps {
  backgroundImage: StaticImageData;
  mascotPeekImage: StaticImageData;
}

const HomePage: React.FC<HomePageProps> = ({
  backgroundImage,
  mascotPeekImage,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClickeddis, setIsClickeddis] = useState(false);
  const [isHeld, setIsHeld] = useState(false);
  const [isClickedreg, setIsClickedreg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#1B4965] overflow-hidden pb-[120px] md:pb-[180px]">
      <Image
        src={backgroundImage}
        alt="Background pattern"
        layout="fill"
        className="object-cover opacity-30"
        priority
      />

      <div className="relative z-10 w-full   ">
        {/* Header Section */}
        <div className="w-full">
          <div className="w-full h-1 bg-white" />

          <div className="w-full bg-[#2682A6] py-3 pb-6 sm:py-4 md:pb-6">
            {/* Responsive Header Container */}
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row sm:justify-between justify-center items-center space-y-4 sm:space-y-3 sm:space-x-3">
              {/* Button Container Left  - Visible on large screens*/}
              <div
                onClick={() => setIsClickeddis(!isClickeddis)}
                className={`hidden lg:block rounded-lg transition-all  ease-in-out mt-3  ${
                  isClickeddis ? "translate-x-[4px] translate-y-[4px]" : ""
                }`}
                style={{
                  boxShadow: isClickeddis
                    ? "none"
                    : "4px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <AnimatedButton
                  text="Discord"
                  mascotImage={mascotPeekImage}
                  className="w-24 sm:w-32 md:w-40 sm:mb-0 rounded-lg"
                  icon={discord}
                />
              </div>

              {/* Text Section - Always on top on small screens*/}
              <div className="flex flex-col items-center lg:items-center w-full lg:w-auto">
                <div className="flex items-center  sm:items-start  md:my-2  lg:my-0">
                  <span
                    className="text-[46px] sm:text-7xl  md:text-[72px] text-[#FF7657] font-yerk tracking-wider relative"
                    style={{
                      textShadow: "4px 4px 0px #1B4965",
                    }}
                  >
                    DEVSOC
                  </span>
                  <span
                    className=" font-yerk text-[8px] mt-1 md:mt-2 sm:mt-2 sm:text-[14px] md:text-[14px]  text-[#FF6B6B]  ml-[2px] sm:ml-2"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(360deg)",
                    }}
                  >
                    <span className="text-[#FF7657]">2k</span>
                    <span className="text-[#FF9737]">25</span>
                  </span>
                </div>
              </div>

              {/* Button Container Right - Visible on large screens*/}
              <div
                onClick={() => setIsClickedreg(!isClickedreg)}
                className={`hidden lg:block rounded-lg transition-all duration-300 ease-in-out   ${
                  isClickedreg ? "translate-x-[4px] translate-y-[4px]" : ""
                }`}
                style={{
                  boxShadow: isClickedreg
                    ? "none"
                    : "4px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <AnimatedButton
                  text="Register"
                  mascotImage={mascotPeekImage}
                  className="w-24 sm:w-32 md:w-40 sm:mb-0 rounded-lg"
                  icon={devsoc}
                />
              </div>

              {/* Buttons Section - On bottom on small screens, in a line*/}
              <div className="lg:hidden flex items-center justify-center space-x-5 w-full">
                <div
                  onClick={() => setIsClickeddis(!isClickeddis)}
                  className={`rounded-lg transition-all  ease-in-out   ${
                    isClickeddis ? "translate-x-[4px] translate-y-[4px]" : ""
                  }`}
                  style={{
                    boxShadow: isClickeddis
                      ? "none"
                      : "4px 4px 0px rgba(0, 0, 0, 0.4)", // Toggle shadow
                  }}
                >
                  <AnimatedButton
                    text="Discord"
                    mascotImage={mascotPeekImage}
                    className="w-24 sm:w-32 md:w-40 sm:mb-0 rounded-lg"
                    icon={discord}
                  />
                </div>

                <div
                  onClick={() => setIsClickedreg(!isClickedreg)}
                  className={`rounded-lg transition-all duration-300 ease-in-out  ${
                    isClickedreg ? "translate-x-[4px] translate-y-[4px]" : ""
                  }`}
                  style={{
                    boxShadow: isClickedreg
                      ? "none"
                      : "4px 4px 0px rgba(0, 0, 0, 0.4)", // Toggle shadow
                  }}
                >
                  <AnimatedButton
                    text="Register"
                    mascotImage={mascotPeekImage}
                    className="w-24 sm:w-32 md:w-40 sm:mb-0 rounded-lg"
                    icon={devsoc}
                  />
                </div>
              </div>
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
  className = "",
  icon,
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden cursor-pointer ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="bg-[#FF7657] px-1 py-2 sm:py-3 md:py-4 rounded transition-all duration-200 "
        style={{ boxShadow: "4px 4px 0px rgba(0, 0, 0, 0.4)" }}
        initial={{ y: 0 }}
        whileHover={{ y: 2 }}
      >
        <motion.div
          className="flex items-center justify-center relative z-10 overflow-hidden"
          style={{ height: "1.5rem" }}
          variants={{
            initial: { y: 0, fontSize: "0.875rem" },
            hover: { y: -14, fontSize: "0.7rem", marginBottom: "0.8px" },
          }}
          transition={{ duration: 0.2 }}
        >
          {icon && (
            <Image
              src={icon}
              alt="Button Icon"
              width={12} // Adjust width
              height={12} // Adjust height
              className={`mr-1 sm:mr-2 
      ${text === "Discord" ? "w-3 sm:w-4 md:w-6 " : "w-3 sm:w-4 md:w-6"}
    `}
            />
          )}
          <span
            className={`text-white font-mono sm:text-base md:text-lg ${
              text === "discord" ? "lowercase" : ""
            }`}
          >
            {text}
          </span>
        </motion.div>

        <motion.div
          className="absolute left-0 right-0 bottom-0 overflow-hidden"
          style={{ height: "calc(2rem + 1px)" }}
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
