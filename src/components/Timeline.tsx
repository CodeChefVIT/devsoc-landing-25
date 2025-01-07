"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEvent {
  time: string;
  event: string;
}

const events = [
  { time: "8:00 am", event: "Hacking Starts" },
  { time: "2:30 pm", event: "Round 2" },
  { time: "6:00 pm", event: "Break" },
  { time: "9:30 pm", event: "Debugging Session" },
];

const AnimatedTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [currentEvent, setCurrentEvent] = useState<TimelineEvent>(events[0]);
  const [activeCircle, setActiveCircle] = useState<number | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const cloudRef = useRef<HTMLDivElement>(null);
  const starMoonRef = useRef<HTMLDivElement>(null);
  const clouddudeRef = useRef<HTMLDivElement>(null); //ref for the CloudDude
  const HIGHLIGHT_ZONE = 20;

  const timelineWidth =
    typeof window !== "undefined" ? window.innerWidth * 0.8 : 800;
  const dotSpacing = timelineWidth / (events.length - 1);

  const extraScrollSpace = dotSpacing * 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((events.length - 1) * dotSpacing + extraScrollSpace)]
  );

  const cloudTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((events.length - 1) * dotSpacing * 0.4 + extraScrollSpace * 0.4)]
  );

  const starMoonTranslateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -((events.length - 1) * dotSpacing * 0.2 + extraScrollSpace * 0.2)]
  );

  const [cloudDudeY, setCloudDudeY] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<"up" | "down">(
    "up"
  );
  const [lastDotPosition, setLastDotPosition] = useState<number | null>(null);

  const JUMP_TRIGGER_ZONE = 30;

  const determineActiveEvent = () => {
    if (!timelineRef.current) return;

    const markerX = window.innerWidth * 0.2;
    const cloudDudeX = markerX + 60; // Cloud dude's actual X position
    const dots = timelineRef.current.querySelectorAll(".timeline-dot");

    let newActiveIndex = null;
    let lastPassedIndex = 0;
    let shouldTriggerJump = false;
    let jumpDirection: "up" | "down" = "up";

    dots.forEach((dot, index) => {
      const dotRect = dot.getBoundingClientRect();
      const dotCenterX = dotRect.left + dotRect.width / 2;
      const distanceFromCloud = dotCenterX - cloudDudeX;

      // Check if we're in the jumping zone
      if (Math.abs(distanceFromCloud) <= JUMP_TRIGGER_ZONE) {
        if (lastDotPosition === null || dotCenterX !== lastDotPosition) {
          shouldTriggerJump = true;
          jumpDirection = distanceFromCloud > 0 ? "up" : "down";
          setLastDotPosition(dotCenterX);
        }
      }

      // Handle active circle and current event
      if (Math.abs(dotCenterX - markerX) <= HIGHLIGHT_ZONE) {
        newActiveIndex = index;
      }

      if (dotCenterX <= markerX + HIGHLIGHT_ZONE) {
        lastPassedIndex = index;
      }
    });

    // Only trigger animation if we're entering/exiting a jump zone
    if (shouldTriggerJump && !isAnimating) {
      setIsAnimating(true);
      setAnimationDirection(jumpDirection);
      setCurrentFrame(0);
    }

    setActiveCircle(newActiveIndex);
    if (
      lastPassedIndex !== events.findIndex((e) => e.time === currentEvent.time)
    ) {
      setCurrentEvent(events[lastPassedIndex]);
    }
  };

  useEffect(() => {
    if (!isAnimating) return;

    const frameIncrement = 2;
    const targetY = -30;
    const totalFrames = Math.abs(targetY / frameIncrement);
    const animationDuration = 30;

    if (currentFrame < totalFrames) {
      const timeout = setTimeout(() => {
        const progress = (currentFrame + 1) / totalFrames;

        if (animationDirection === "up") {
          setCloudDudeY(targetY * progress);
        } else {
          setCloudDudeY(targetY * (1 - progress));
        }

        setCurrentFrame(currentFrame + 1);
      }, animationDuration);

      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(false);
      if (animationDirection === "down") {
        setCloudDudeY(0);
        setLastDotPosition(null); // Reset last dot position after animation completes
      }
    }
  }, [isAnimating, currentFrame, animationDirection]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const containerTop = rect.top + scrollPosition;
      const containerHeight = rect.height;

      if (
        scrollPosition >= containerTop &&
        scrollPosition < containerTop + containerHeight - window.innerHeight
      ) {
        setIsPinned(true);
        determineActiveEvent();
      } else {
        setIsPinned(false);
      }
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollY / maxScroll) * 1000;

      // Update cloud opacity
      if (cloudRef.current) {
        cloudRef.current.style.opacity = Math.min(
          1,
          percentage / 100
        ).toString();
      }
      // Update starmoon opacity
      if (starMoonRef.current) {
        starMoonRef.current.style.opacity = Math.min(
          1,
          percentage / 100
        ).toString();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentEvent.time]);

  const isNightTime = (time: string): boolean => {
    const match = time.match(/(\d+):(\d+)\s?(am|pm)/i);
    if (!match) return false;
    const [hourStr, modifier] = match;
    let hour = parseInt(hourStr, 10);
    if (modifier.toLowerCase() === "pm" && hour !== 12) hour += 12;
    if (modifier.toLowerCase() === "am" && hour === 12) hour = 0;
    return hour >= 18;
  };

  const nightMode = isNightTime(currentEvent.time);
  const cloudImageUrl = nightMode
    ? "/assets/Cloudsblack.svg"
    : "/assets/clouds.svg";
  const starMoonImageUrl = "/assets/Starmoon.svg";
  const clouddudeImageUrl = "/assets/CloudDude.svg";

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{
        height: "400vh",
      }}
    >
      <div
        style={{
          position: isPinned ? "fixed" : "absolute",
          top: isPinned ? 0 : "auto",
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: isPinned ? 10 : 1,
          willChange: "transform",
        }}
      >
        <motion.div
          className={`w-full h-full flex flex-col items-center ${
            nightMode ? "bg-[#1E1E1E] " : "bg-gray-100 "
          }`}
          style={{
            transition: "background-color 0.5s ease-in-out",
          }}
        >
          <motion.div
            ref={cloudRef}
            className="absolute top-0 left-0 w-[400%] h-full pointer-events-none"
            style={{
              x: cloudTranslateX,
              backgroundImage: `url(${cloudImageUrl})`,
              backgroundRepeat: "repeat-x",
              backgroundSize: "25% 100%",
              opacity: 0,
              transition: "opacity 0.5s ease-in-out",
              height: "100%",
            }}
          />
          {/* Star Moon */}
          {nightMode && (
            <motion.div
              ref={starMoonRef}
              className="absolute bottom-1/ left-1/4 w-[400%] h-full pointer-events-none"
              style={{
                x: starMoonTranslateX,
                backgroundImage: `url(${starMoonImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "17% 100%", // Adjust size as needed
              }}
            />
          )}

          {/* Title Section */}
          <div className="mb-16 mt-10 z-10 relative w-full pl-12 text-left">
            <h1
              className={`text-7xl font-bold mb-10 font-yerk ${
                nightMode ? "text-[#FF9737] " : "text-[#242323] "
              }`}
            >
              TIMELINE
            </h1>
            <p
              className={`text-5xl  font-yerk ml-2 ${
                nightMode ? "text-[#FFFFFF] " : "text-black "
              }`}
            >
              Day 2
            </p>
          </div>

          {/* Current Event Display */}
          <div className="relative flex  mt-16  mb-20">
            <div
              className={`font-mono rounded-[50px] p-12 shadow-xl text-center border-8 ${
                nightMode
                  ? "bg-white/70 text-black border-white"
                  : "bg-white text-black border-black"
              } w-[500px]`}
            >
              <p className="text-5xl">{currentEvent.time}</p>
              <p className="text-5xl whitespace-nowrap  text-ellipsis">
                {currentEvent.event}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative w-full h-32 flex justify-start items-center z-10">
            {/* Highlight Zone */}
            <div className="absolute left-[20%] top-1/2 w-10 h-8 bg-red-500/10 -translate-x-5 -translate-y-1/2 z-10" />
            <div className="absolute left-[20%] top-1/2 w-0.5 h-8 bg-red-500 -translate-y-1/2 z-20" />

            {/* Base Line */}
            <div
              className={`absolute top-1/2 w-[100%] h-1 ${
                nightMode ? "bg-white" : "bg-black"
              }`}
            />
            {/* CloudDude */}
            <motion.div
              ref={clouddudeRef}
              className="absolute ml-60 -translate-x-1/2 z-30"
              style={{
                y: cloudDudeY - 20,
                backgroundImage: `url(${clouddudeImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                transition: "y 0.3s ease-in-out",
                width: "150px",
                height: "150px",
                transform: `translate(-50%, -50%) scale(1.5)`,
              }}
            />

            {/* Moving Timeline */}
            <motion.div
              ref={timelineRef}
              className="absolute top-1/2 flex items-center"
              style={{
                x: translateX,
                left: `${window.innerWidth * 0.2}px`,
              }}
            >
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center translate-y-7"
                  style={{
                    position: "absolute",
                    left: `${index * dotSpacing}px`,
                  }}
                >
                  <div
                    className={`timeline-dot w-6 h-6 rounded-full border-4 transition-colors duration-300 ${
                      nightMode
                        ? activeCircle === index
                          ? "bg-white border-white"
                          : "bg-[#1E1E1E] border-white"
                        : activeCircle === index
                        ? "bg-black border-black"
                        : "bg-white border-black"
                    }`}
                  />
                  {/* Label */}
                  <div className="mt-2 text-center font-mono whitespace-nowrap mb-2 ">
                    <p
                      className={`text-4xl font-medium  ml-3 ${
                        nightMode ? "text-white " : "text-black "
                      }`}
                    >
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTimeline;
