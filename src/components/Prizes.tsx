"use client";
import { useEffect, useState, useRef } from "react";

const Prizes = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="prizes"
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center bg-[#fbead5] overflow-hidden font-yerk"
    >
      <h1 className="absolute top-16 left-32 text-7xl font-bold tracking-wider">
        PRIZES
      </h1>
      <div
        className={`absolute top-52 flex flex-col items-center justify-center bg-[#F29F58] text-white text-xl font-bold rounded-full h-[60%] w-[35%] transition-all duration-1000 border-[5px] border-white z-20 ${
          animate ? "" : ""
        }`}
      >
        <h1 className="text-[2.5rem] font-bold tracking-wide">WINNER</h1>
        <p className="mt-56 text-[2rem] font-semibold text-[#5E1D24]">
          INR 1,00,000
        </p>
      </div>
      <SquareCard
        positionStart="top-[25%] left-[25%] z-0"
        positionEnd="top-48 left-36"
        bgColor="bg-[#1B1833]"
        animate={animate}
        reverse={true}
      />
      <SquareCard
        positionStart="top-[25%] right-[25%] z-0"
        positionEnd="top-48 right-36"
        bgColor="bg-[#AB4459]"
        animate={animate}
        reverse={false}
      />
      <SquareCard
        positionStart="bottom-[20%] left-[25%] z-0"
        positionEnd="bottom-28 left-36"
        bgColor="bg-[#AB4459]"
        animate={animate}
        reverse={false}
      />
      <SquareCard
        positionStart="bottom-[20%] right-[25%] z-0"
        positionEnd="bottom-28 right-36"
        bgColor="bg-[#1B1833]"
        animate={animate}
        reverse={true}
      />
    </div>
  );
};
export default Prizes;

const SquareCard = ({
  positionStart,
  positionEnd,
  bgColor,
  animate,
  reverse,
}: {
  positionStart: string;
  positionEnd: string;
  bgColor: string;
  animate: boolean;
  reverse: boolean;
}) => {
  return (
    <div
      className={`absolute ${bgColor}  text-center text-sm font-semibold rounded-3xl h-56 w-64 flex flex-col items-center justify-center transition-all duration-1000 border-[5px] border-white ${
        animate ? positionEnd : positionStart
      }`}
    >
      <p className={`text-[1.25rem] font-bold tracking-wide text-white`}>
        First
      </p>
      <p className={`text-[1.25rem] font-bold tracking-wide text-white mt-2`}>
        Runner Up
      </p>
      <p
        className={`mt-24 text-[1rem] font-semibold ${
          reverse ? "text-[#A85059]" : "text-[#2C2847]"
        }`}
      >
        INR 1,00,000
      </p>
    </div>
  );
};
