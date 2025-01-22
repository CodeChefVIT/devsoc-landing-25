"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import devsoc from "../assets/images/DEVSOC.png";
import discord from "../assets/images/discord.svg";
import dev2k25 from "../assets/images/Devlogoheader.svg"; // Import the SVG

import HomeRIve from "./HomeRIve";
import MobileRive from "./MobileRive";
import TopComponent from "./TopComponent";

interface HomePageProps {
  backgroundImage: StaticImageData;
  mascotPeekImage: StaticImageData;
}

const HomePage: React.FC<HomePageProps> = ({
  backgroundImage,
  mascotPeekImage,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHeld, setIsHeld] = useState<"discord" | "register" | null>(null);
  const [registerText, setRegisterText] = useState("Register"); // Added state for register button text

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

  const handleButtonMouseDown = (buttonType: "discord" | "register") => {
    setIsHeld(buttonType);
  };

  const handleButtonMouseUp = () => {
    setIsHeld(null);
  };

  const handleButtonMouseLeave = () => {
    setIsHeld(null);
  };

  const handleDiscordButtonClick = () => {
    window.open("https://discord.gg/M8V6vxXnUq", "_blank");
  };


  useEffect(() => {
      setRegisterText("Coming Soon")
  }, [])

  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-[120px] md:pb-[180px]">
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
            <div className="max-w-7xl mx-auto px-3 flex flex-col lg:flex-row sm:justify-between justify-center items-center   ">
              {/* Button Container Left  - Visible on large screens*/}
              <div
                onMouseDown={() => handleButtonMouseDown("discord")}
                onMouseUp={handleButtonMouseUp}
                onMouseLeave={handleButtonMouseLeave}
                onClick={handleDiscordButtonClick} 
                className={`hidden lg:block rounded-lg transition  mt-3 
                  ${
                    isHeld === "discord" ? "translate-x-[4px] translate-y-[4px]" : ""
                  }`
                }
                style={{
                  boxShadow: isHeld === "discord"
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

              {/* Logo Section - Always on top on small screens*/}
              <div className="flex flex-col items-center lg:items-center w-full lg:w-auto">
                <div className="w-[290px] h-[70px] sm:w-[400px] sm:h-[100px] md:w-[500px] md:h-[100px] lg:w-[550px] lg:h-[130px] top-1 relative">
                  <Image
                    src={dev2k25}
                    alt="Devsoc 2k25 logo"
                    layout="fill"
                    objectFit="contain"
                    className="relative z-10"
                    priority
                  />
                </div>
              </div>

              {/* Button Container Right - Visible on large screens*/}
              <div
                onMouseDown={() => handleButtonMouseDown("register")}
                onMouseUp={handleButtonMouseUp}
                onMouseLeave={handleButtonMouseLeave}
                className={`hidden lg:block rounded-lg transition  mt-3 ${
                  isHeld === "register" ? " translate-x-[4px] translate-y-[4px] " : ""
                }`}
                style={{
                  boxShadow: isHeld === "register"
                    ? "none"
                    : "4px 4px 0px rgba(0, 0, 0, 0.4)",
                }}
              >
                <AnimatedButton
                  text={registerText}
                  mascotImage={mascotPeekImage}
                  className="w-24 sm:w-32 md:w-40 sm:mb-0 rounded-lg"
                  icon={devsoc}
                />
              </div>

              {/* Buttons Section - On bottom on small screens, in a line*/}
              <div className="lg:hidden flex items-center justify-center space-x-5 w-full">
                <div
                  onMouseDown={() => handleButtonMouseDown("discord")}
                  onMouseUp={handleButtonMouseUp}
                  onMouseLeave={handleButtonMouseLeave}
                   onClick={handleDiscordButtonClick}
                  className={`rounded-lg transition  mt-3
                  ${
                    isHeld === "discord" ? "translate-x-[4px] translate-y-[4px]" : ""
                  }`
                }
                  style={{
                  boxShadow: isHeld === "discord"
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

                <div
                  onMouseDown={() => handleButtonMouseDown("register")}
                  onMouseUp={handleButtonMouseUp}
                  onMouseLeave={handleButtonMouseLeave}
                  className={`rounded-lg transition  mt-3 ${
                    isHeld === "register" ? " translate-x-[4px] translate-y-[4px] " : ""
                  }`}
                  style={{
                    boxShadow: isHeld === "register"
                      ? "none"
                      : "4px 4px 0px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  <AnimatedButton
                    text={registerText}
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
          <div className="flex flex-col items-center justify-center mb-44 xl:mb-32 relative">
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