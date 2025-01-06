"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/images/footer-1.png";
import facebook from "@/assets/images/facebook.png";
import discord from "@/assets/images/discord.png";
import instagram from "@/assets/images/instagram.png";
import linkedin from "@/assets/images/linkedin.png";
import twitter from "@/assets/images/twitter.png";
import yt from "@/assets/images/yt.png";
import theCopy from "@/assets/images/theCopy.png";
// import fArrow1 from "@/assets/images/footer-2.svg";
// import fArrow2 from "@/assets/images/footer-3.svg";
import theFooterSVG from "@/assets/images/theFooterSVG.svg";

export default function Footer() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const footerStyle = {
    background: "url('/assets/footer-img.png') ",
    backgroundSize: "cover",
    // height: "60vh"
  };
  return (
    <div>
      <div
        style={footerStyle}
        className=" grid grid-rows-[80%_20%] font-yerk items-baseline"
      >
        {/* pt-[20%] is just some extra space for the moving text, can always remove it and edit the bg */}
        <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-4  md:py-16 h-fit">
          <div className="flex justify-center items-end md:mb-0 mb-4">
            <Image src={img1} height={250} width={250} alt="devsoc" />
          </div>
          {!isMobile && (
            <div className="flex justify-center items-end relative">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 100"
              className="w-full h-auto"
            >
              <path
                d="M10,90 C50,10 150,10 190,90"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </svg> */}
              <Image
                src={theFooterSVG}
                height={100}
                width={100}
                alt="footer-1"
                className="w-full absolute scale-150 bottom-4 lg:bottom-0 lg:scale-125"
              />
              {/* <Image src={fArrow2} height={80} width={80} alt="footer-1" className="w-full absolute left-5 top-5"/> */}
            </div>
          )}

          <div className="text-2xl drop-shadow-lg md:ml-12 text-center md:text-left">
            <div className="pb-8">
              <Link href={"#about"}>ABOUT</Link>
            </div>
            <div className="pb-8">
              <Link href={"#timeline"}>TIMELINE</Link>
            </div>
            <div className="pb-8">
              <Link href={"#tracks"}>TRACKS</Link>
            </div>
            <div className="pb-8">
              <Link href={"#prizes"}>PRIZE</Link>
            </div>
            <div className="pb-8 text-base">
              <Link href={"#visitus"} className="rounded-lg bg-[#FC1D21] p-4">
                VISIT US
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-start">
            <div className="grid grid-cols-3 md:grid-cols-2 grid-rows-1 md:grid-rows-3 gap-0 items-center">
              <a href={"https://www.facebook.com/devsoccodechefvit/"} target="__value" className="m-3">
                <Image
                  className=""
                  src={facebook}
                  height={60}
                  width={60}
                  alt="facebook"
                />
              </a>
              <a href={"https://www.youtube.com/@CodeChefVIT"} target="__value" className="m-3">
                <Image
                  className=""
                  src={yt}
                  height={60}
                  width={60}
                  alt="youtube"
                />
              </a>
              <a href={"https://www.linkedin.com/company/codechefvit/"} target="__value" className="m-3">
                <Image
                  className=""
                  src={linkedin}
                  height={60}
                  width={60}
                  alt="linkedin"
                />
              </a>
              <a href={"https://www.x.com/codechefvit"} className="m-3" target="__value">
                <Image
                  className=" "
                  src={twitter}
                  height={60}
                  width={60}
                  alt="twitter"
                />
              </a>
              <a href={"https://www.instagram.com/codechefvit/"} className="m-3" target="__value">
                <Image
                  className=""
                  src={instagram}
                  height={60}
                  width={60}
                  alt="instagram"
                />
              </a>
              <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="m-3" target="__value">
                <Image
                  className=""
                  src={discord}
                  height={60}
                  width={60}
                  alt="discord"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center mt-8 pt-2 border-t-4 border-[#FC1D21] mx-[10%] drop-shadow-lg">
            <Image src={theCopy} alt="@" height={40} width={40} />{" "}
            <p>2025 CODECHEF</p>
          </div>
        </div>
      </div>
      <div className="font-yerk text-4xl text-center text-black bg-white py-6 h-fit ">
        LMAO
      </div>
    </div>
  );
}
