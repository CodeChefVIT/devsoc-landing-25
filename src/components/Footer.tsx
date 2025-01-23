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
import TopComponent from "@/components/TopComponent";

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
      <div className="font-yerk text-4xl text-center text-black bg-white py-6 h-fit ">
        LMAO {/*just keeping it*/}
      </div>
      <div
        style={footerStyle}
        className="pt-[140px] md:pt-[230px] grid grid-rows-[60%_20%_20%] font-yerk items-baseline"
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

          <div className="text-2xl md:ml-12 text-center md:text-left">
            <div className="pb-8">
              <Link
                href={"#about"}
                className="drop-shadow-md hover:drop-shadow-lg transition-all duration-100"
              >
                ABOUT
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={"#timeline"}
                className="drop-shadow-md hover:drop-shadow-lg transition-all duration-100"
              >
                TIMELINE
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={"#tracks"}
                className="drop-shadow-md hover:drop-shadow-lg transition-all duration-100"
              >
                TRACKS
              </Link>
            </div>
            <div className="pb-8">
              <Link
                href={"#prizes"}
                className="drop-shadow-md hover:drop-shadow-lg transition-all duration-100"
              >
                PRIZE
              </Link>
            </div>
            <div className="pb-8 text-base">
              <Link
                target="__blank"
                href={"https://www.codechefvit.com/"}
                className="rounded-lg bg-[#FC1D21] p-4 drop-shadow-md hover:drop-shadow-lg transition-all duration-100"
              >
                VISIT US
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-start">
            <div className="mt-8 md:mt-0 grid grid-cols-3 md:grid-cols-2 grid-rows-1 md:grid-rows-3 gap-0 items-center">
              <Link
                href={"https://www.facebook.com/devsoccodechefvit/"}
                target="__value"
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
              >
                <Image
                  className=""
                  src={facebook}
                  height={60}
                  width={60}
                  alt="facebook"
                />
              </Link>
              <Link
                href={"https://www.youtube.com/@CodeChefVIT"}
                target="__value"
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
              >
                <Image
                  className=""
                  src={yt}
                  height={60}
                  width={60}
                  alt="youtube"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/codechefvit/"}
                target="__value"
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
              >
                <Image
                  className=""
                  src={linkedin}
                  height={60}
                  width={60}
                  alt="linkedin"
                />
              </Link>
              <Link
                href={"https://www.x.com/codechefvit"}
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
                target="__value"
              >
                <Image
                  className=" "
                  src={twitter}
                  height={60}
                  width={60}
                  alt="twitter"
                />
              </Link>
              <Link
                href={"https://www.instagram.com/codechefvit/"}
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
                target="__value"
              >
                <Image
                  className=""
                  src={instagram}
                  height={60}
                  width={60}
                  alt="instagram"
                />
              </Link>
              <Link
                href={"https://discord.gg/M8V6vxXnUq"}
                className="m-3 hover:drop-shadow-lg transition-all duration-200"
                target="__value"
              >
                <Image
                  className=""
                  src={discord}
                  height={60}
                  width={60}
                  alt="discord"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[125px] md:mt-20 bg-[#ff6f4e] border-y-4 border-[#fe5a42] shadow-md">
          <TopComponent />
        </div>
        <div className="text-center  mt-10">
          <div className="flex justify-center items-center   border-[#FC1D21] mx-[10%] drop-shadow-lg">
            <Image src={theCopy} alt="@" height={40} width={40} />{" "}
            <p>2025 CODECHEF</p>
          </div>
        </div>
      </div>
    </div>
  );
}
