"use client";
import { useEffect, useState, useRef } from "react";

const Prizes = () => {
  const [animate, setAnimate] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        },
        { threshold: 0.5 }
      );

      const currentSectionRef = sectionRef.current;

      if (currentSectionRef) {
        observer.observe(currentSectionRef);
      }

      return () => {
        if (currentSectionRef) {
          observer.unobserve(currentSectionRef);
        }
      };
    }
  }, [windowWidth]);

  return (
    <div className="flex justify-center bg-[#fbead5] min-h-[800px] w-full">
      <div
        id="prizes"
        ref={sectionRef}
        className="relative max-w-[1400px] w-full flex flex-col items-center justify-center bg-[#fbead5] overflow-hidden font-yerk "
      >
        <h1 className={`absolute top-8 left-8 sm:top-16 sm:left-32 text-4xl sm:text-7xl font-bold tracking-wider text-black${
            windowWidth <= 768 ? "top-[2%] mt-10" : ""
          }`}>
          PRIZES
        </h1>
        <div
          className={`absolute ${
            windowWidth <= 768 ? "top-[15%] mt-10" : "top-20 sm:top-48"
          } flex flex-col items-center justify-center bg-[#F29F58] text-white font-bold rounded-full border-[5px] border-white transition-all duration-1000 lg:z-20 aspect-square`}
          style={{
            width: windowWidth <= 768 ? "70%" : "35%",
            padding: windowWidth <= 768 ? "1.5rem" : "2rem",
          }}
        >
          <h1
            className={`font-bold tracking-wide mt-5 ${
              windowWidth <= 768 ? "text-[1rem]" : "text-[2rem] sm:text-[3rem]"
            }`}
          >
            WINNER
          </h1>
          <p
            className={`font-semibold text-white mb-5 font-mono text-center ${
              windowWidth <= 768 ? "text-[0.7rem]" : "text-[1rem] sm:text-[1.8rem]"
            }`}
          >
            Snag the top spot and claim ultimate bragging rights along with the
            grand prize - because champions don&apos;t just win, they wow!
          </p>
          <p
            className={`font-semibold text-[#5E1D24] mb-5 ${
              windowWidth <= 768 ? "text-[0.8rem]" : "text-[1.2rem] sm:text-[2rem]"
            }`}
          >
            INR 1,00,000
          </p>
        </div>

        {windowWidth <= 768 ? (
          <div className="absolute bottom-8 grid grid-cols-2 gap-4 w-[90%]">
            <SquareCard bgColor="bg-[#1B1833]" reverse={true} />
            <SquareCard bgColor="bg-[#AB4459]" reverse={false} />
            <SquareCard bgColor="bg-[#AB4459]" reverse={false} />
            <SquareCard bgColor="bg-[#1B1833]" reverse={true} />
          </div>
        ) : (
          <>
            <SquareCard
              positionStart="top-[30%] left-[10%] sm:top-[25%] sm:left-[25%]"
              positionEnd="top-48 left-8 sm:top-48 sm:left-36"
              bgColor="bg-[#1B1833]"
              animate={animate && windowWidth >= 768}
              reverse={true}
            />
            <SquareCard
              positionStart="top-[20%] right-[10%] sm:top-[25%] sm:right-[25%]"
              positionEnd="top-48 right-8 sm:top-48 sm:right-36"
              bgColor="bg-[#AB4459]"
              animate={animate && windowWidth >= 768}
              reverse={false}
            />
            <SquareCard
              positionStart="bottom-[25%] left-[10%] sm:bottom-[30%] sm:left-[25%]"
              positionEnd="bottom-14 left-8 sm:bottom-14 sm:left-36"
              bgColor="bg-[#AB4459]"
              animate={animate && windowWidth >= 768}
              reverse={false}
            />
            <SquareCard
              positionStart="bottom-[25%] right-[10%] sm:bottom-[30%] sm:right-[25%]"
              positionEnd="bottom-14 right-8 sm:bottom-14 sm:right-36"
              bgColor="bg-[#1B1833]"
              animate={animate && windowWidth >= 768}
              reverse={true}
            />
          </>
        )}
      </div>
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
        window.innerWidth <= 768 ? "h-28 w-32" : "h-44 w-48 sm:h-56 sm:w-64"
      } flex flex-col items-center justify-center transition-all duration-1000 border-[5px] border-white ${
        animate ? positionEnd : positionStart
      } ${
        window.innerWidth <= 768
          ? "relative mx-auto my-4 top-[unset] left-[unset]"
          : ""
      }`}
    >
      <p
        className={` font-semibold text-white  ${
          window.innerWidth <= 768
            ? "text-[0.7rem]"
            : "text-[1.2rem] sm:text-[1.5rem] mb-4"
        }`}
      >
        First
      </p>
      <p
        className={` font-semibold text-white ${
          window.innerWidth <= 768
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
          window.innerWidth <= 768
            ? "text-[0.7rem]"
            : "text-[1.2rem] sm:text-[1.5rem]"
        }`}
      >
        INR 1,00,000
      </p>
    </div>
  );
};
