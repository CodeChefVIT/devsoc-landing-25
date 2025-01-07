"use client";
import { useEffect, useState, useRef } from "react";

const Prizes = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) {
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
    }
  }, []);

  return (
    <div
      id="prizes"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#fbead5] overflow-hidden font-yerk"
    >
      <h1 className="absolute top-8 left-8 sm:top-16 sm:left-32 text-4xl sm:text-7xl font-bold tracking-wider text-black">
        PRIZES
      </h1>
      <div
        className={`absolute top-20 sm:top-48 flex flex-col items-center justify-between bg-[#F29F58] text-white font-bold rounded-full border-[5px] border-white transition-all duration-1000 lg:z-20 aspect-square w-[60%] sm:w-[35%] p-6 sm:p-8 ${
          window.innerWidth < 640 ? "top-[15%] mt-10" : "top-20 sm:top-48"
        }`}
      >
        <h1
          className={` font-bold tracking-wide mt-5 ${
            window.innerWidth < 640
              ? "text-[1rem] "
              : "text-[2rem] sm:text-[3rem]"
          }`}
        >
          WINNER
        </h1>

        <p
          className={` font-semibold text-[#5E1D24] mb-5 ${
            window.innerWidth < 640
              ? "text-[0.8rem]"
              : "text-[1.2rem] sm:text-[2rem]"
          }`}
        >
          INR 1,00,000
        </p>
      </div>

      {window.innerWidth < 640 ? (
        <div className="absolute bottom-8 sm:bottom-16 grid grid-cols-2 gap-4 w-[80%]">
          <SquareCard bgColor="bg-[#1B1833]" reverse={true} />
          <SquareCard bgColor="bg-[#AB4459]" reverse={false} />
          <SquareCard bgColor="bg-[#AB4459]" reverse={false} />
          <SquareCard bgColor="bg-[#1B1833]" reverse={true} />
        </div>
      ) : (
        <>
          <SquareCard
            positionStart="top-[20%] left-[10%] sm:top-[25%] sm:left-[25%] sm:z-0"
            positionEnd="top-48 left-8 sm:top-48 sm:left-36"
            bgColor="bg-[#1B1833]"
            animate={animate && window.innerWidth >= 640}
            reverse={true}
          />
          <SquareCard
            positionStart="top-[20%] right-[10%] sm:top-[25%] sm:right-[25%] sm:z-0"
            positionEnd="top-48 right-8 sm:top-48 sm:right-36"
            bgColor="bg-[#AB4459]"
            animate={animate && window.innerWidth >= 640}
            reverse={false}
          />
          <SquareCard
            positionStart="bottom-[15%] left-[10%] sm:bottom-[20%] sm:left-[25%] sm:z-0"
            positionEnd="bottom-28 left-8 sm:bottom-28 sm:left-36"
            bgColor="bg-[#AB4459]"
            animate={animate && window.innerWidth >= 640}
            reverse={false}
          />
          <SquareCard
            positionStart="bottom-[15%] right-[10%] sm:bottom-[20%] sm:right-[25%] sm:z-0"
            positionEnd="bottom-28 right-8 sm:bottom-28 sm:right-36"
            bgColor="bg-[#1B1833]"
            animate={animate && window.innerWidth >= 640}
            reverse={true}
          />
        </>
      )}
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
  positionStart?: string;
  positionEnd?: string;
  bgColor: string;
  animate?: boolean;
  reverse: boolean;
}) => {
  return (
    <div
      className={`absolute ${bgColor} text-center text-xs sm:text-sm font-semibold rounded-2xl sm:rounded-3xl ${
        window.innerWidth < 640 ? "h-28 w-32" : "h-44 w-48 sm:h-56 sm:w-64"
      } flex flex-col items-center justify-center transition-all duration-1000 border-[5px] border-white ${
        animate ? positionEnd : positionStart
      } ${
        window.innerWidth < 640
          ? "relative mx-auto my-4 top-[unset] left-[unset]"
          : ""
      }`}
    >
      <p
        className={` font-semibold text-white  ${
          window.innerWidth < 640
            ? "text-[0.7rem]"
            : "text-[1.2rem] sm:text-[1.5rem] mb-4"
        }`}
      >
        First
      </p>
      <p
        className={` font-semibold text-white ${
          window.innerWidth < 640
            ? "text-[0.7rem]"
            : "text-[1.2rem] sm:text-[1.5rem]"
        }`}
      >
        Runner Up
      </p>
      <p
        className={`mt-8 sm:mt-16  font-semibold ${
          reverse ? "text-[#A85059]" : "text-[#2C2847]"
        }
        ${
          window.innerWidth < 640
            ? "text-[0.7rem]"
            : "text-[1.2rem] sm:text-[1.5rem]"
        }`}
      >
        INR 1,00,000
      </p>
    </div>
  );
};
