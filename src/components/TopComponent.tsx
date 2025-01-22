"use client";
import Image from "next/image";
import h1 from "@/assets/images/h-1.svg";
import h4 from "@/assets/images/h-2.svg";
import h3 from "@/assets/images/h-3.svg";
import h2 from "@/assets/images/h-4.svg";
import { useEffect, useState } from "react";

export default function TopComponent() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {!isMobile ? (
        <div className="flex justify-evenly py-1 items-center">
          <Image
            className="h-10 w-fit"
            src={h1}
            width={204}
            height={61}
            alt="Picture "
          />
          <Image
            className="h-10 w-fit"
            src={h2}
            width={130}
            height={61}
            alt="Picture of the author"
          />
          <Image
            className="h-10 w-fit"
            src={h3}
            width={175}
            height={83}
            alt="Picture of the author"
          />
          <Image
            className="h-10 w-fit"
            src={h4}
            width={175}
            height={83}
            alt="Picture of the author"
          />
        </div>
      ) : (
        <div className="py-1">
          <div className="flex justify-evenly  items-center">
            <Image
              className="h-10 w-fit"
              src={h1}
              width={204}
              height={61}
              alt="Picture "
            />
            <Image
              className="h-10 w-fit"
              src={h2}
              width={130}
              height={61}
              alt="Picture of the author"
            />
          </div>
          <div className="flex justify-evenly  items-center">
            <Image
              className="h-10 w-fit"
              src={h3}
              width={175}
              height={83}
              alt="Picture of the author"
            />
            <Image
              className="h-10 w-fit"
              src={h4}
              width={175}
              height={83}
              alt="Picture of the author"
            />
          </div>
        </div>
      )}
    </>
  );
}
