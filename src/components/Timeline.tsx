"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineEvent {
  time: string;
  event: string;
  day: number;
}

const events: TimelineEvent[] = [
  // Day 1 - 03.02.2025
  { time: "9:00 am", event: "Doors open and check-in", day: 1 },
  { time: "10:00 am", event: "Opening Ceremony", day: 1 },
  { time: "11:00 am", event: "Hacking Session", day: 1 },
  { time: "1:00 pm", event: "Lunch Break", day: 1 },
  { time: "2:00 pm", event: "Hacking Session", day: 1 },
  { time: "3:30 pm", event: "Informative Tech Session - 1", day: 1 },
  { time: "4:30 pm", event: "Hacking Session", day: 1 },
  { time: "7:00 pm", event: "Dinner Break", day: 1 },
  { time: "9:00 pm", event: "Hacking Session", day: 1 },
  { time: "10:00 pm", event: "Engagement Activity", day: 1 },
  { time: "11:30 pm", event: "Review 1", day: 1 },

  // Day 2 - 04.02.2025
  { time: "2:30 am", event: "Hacking Session", day: 2 },
  { time: "6:00 am", event: "Breakfast Break", day: 2 },
  { time: "9:00 am", event: "Hacking Session", day: 2 },
  { time: "12:00 pm", event: "Lunch Break", day: 2 },
  { time: "2:00 pm", event: "Hacking Session", day: 2 },
  { time: "4:00 pm", event: "Informative Tech Session - 2", day: 2 },
  { time: "5:30 pm", event: "Hacking Session", day: 2 },
  { time: "7:00 pm", event: "Dinner Break", day: 2 },
  { time: "9:00 pm", event: "Hacking Session", day: 2 },

  // Day 3 - 05.02.2025
  { time: "12:00 am", event: "Review 2", day: 3 },
  { time: "3:00 am", event: "Hacking Session", day: 3 },
  { time: "5:30 am", event: "Final Submission", day: 3 },
  { time: "6:00 am", event: "Breakfast Break", day: 3 },
  { time: "9:00 am", event: "Final Pitches", day: 3 },
  { time: "11:00 am", event: "Prize Distribution and Closing Ceremony", day: 3 },
];

const AnimatedTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const [currentEvent, setCurrentEvent] = useState<TimelineEvent>(events[0]);
  const [activeCircle, setActiveCircle] = useState<number | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const cloudRef = useRef<HTMLDivElement>(null);
  const starMoonRef = useRef<HTMLDivElement>(null);
  const clouddudeRef = useRef<HTMLDivElement>(null);
  const HIGHLIGHT_ZONE = 20;

  const timelineWidth =
    typeof window !== "undefined" ? window.innerWidth * 6 : 1200;
  const dotSpacing = timelineWidth / (events.length*1.5);

  // Night mode detection function
  const isNightTime = (time: string): boolean => {
    const match = time.match(/(\d+):(\d+)\s?(am|pm)/i);
    if (!match) return false;
    const [, hourStr, , modifier] = match;
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

 const timelineProgress = useTransform(
   scrollYProgress,
    [0, 0.85],
    [0, 1]
 );

 const containerTransitionProgress = useTransform(
    scrollYProgress,
    [0.85, 1],
    [0, 1]
 );

  const translateX = useTransform(
      timelineProgress,
    [0, 1],
    [0, -(events.length * dotSpacing)]
  );

  const containerTranslateY = useTransform(
      containerTransitionProgress,
    [0, 1],
    ["0vh", "-100vh"]
  );

  const cloudTranslateX = useTransform(
    timelineProgress,
    [0, 1],
    [0, -((events.length - 1) * dotSpacing * 0.4)]
  );

  const starMoonTranslateX = useTransform(
    timelineProgress,
    [0, 1],
    [0, -((events.length - 1) * dotSpacing * 0.2)]
  );


  const [cloudDudeY, setCloudDudeY] = useState(0);
  const jumpHeight = -30;
  const PEAK_ZONE = 15;

  const determineActiveEvent = () => {
    if (!timelineRef.current || !timelineLineRef.current) return;

    const markerX = timelineLineRef.current.getBoundingClientRect().left;
    const cloudPosition = markerX + 60;
    const dots = timelineRef.current.querySelectorAll(".timeline-dot");
    let newActiveIndex = null;
    let lastPassedIndex = 0;

    dots.forEach((dot, index) => {
      const dotRect = dot.getBoundingClientRect();
      const dotCenterX = dotRect.left + dotRect.width / 2;

      if (Math.abs(dotCenterX - cloudPosition) <= PEAK_ZONE) {
        setCloudDudeY(jumpHeight);
      }
       if (Math.abs(dotCenterX - markerX) <= HIGHLIGHT_ZONE + 5) {
           newActiveIndex = index;
       }

       if (dotCenterX <= markerX + HIGHLIGHT_ZONE) {
         lastPassedIndex = index;
      }
   });

    setActiveCircle(newActiveIndex);
      if (lastPassedIndex !== events.findIndex((e) => e.time === currentEvent.time)) {
        setCurrentEvent(events[lastPassedIndex]);
    }
  };


  useEffect(() => {
        setCloudDudeY(0);
  },[currentEvent.time])

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

      if (cloudRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const percentage = (scrollY / maxScroll) * 1000;
        cloudRef.current.style.opacity = Math.min(1, percentage / 100).toString();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentEvent.time]);

  return (
    <>
      <div ref={containerRef} className="relative w-full h-[1500vh]">
        <motion.div
          style={{
            position: isPinned ? "fixed" : "absolute",
            top: isPinned ? 0 : "auto",
            left: 0,
            width: "100%",
            height: "100vh",
            zIndex: isPinned ? 10 : 1,
            willChange: "transform",
            y: containerTranslateY,
            backgroundColor: nightMode ? "#1E1E1E" : "#f3f4f6",
            transition: "background-color 0.5s ease-in-out",
          }}
        >
          <motion.div
            className="w-full h-full flex flex-col items-center"
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

            {nightMode && (
              <motion.div
                ref={starMoonRef}
                className="absolute bottom-1/4 left-1/4 w-[400%] h-full pointer-events-none"
                style={{
                  x: starMoonTranslateX,
                  backgroundImage: `url(${starMoonImageUrl})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "17% 100%",
                }}
              />
            )}
            <div className="mb-16 mt-10 z-10 relative w-full pl-12 text-left">
              <motion.h1
                className="text-7xl font-bold mb-10 font-yerk"
                style={{
                  color: nightMode ? "#FF9737" : "#242323",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                TIMELINE
              </motion.h1>
              <motion.p
                className="text-5xl font-yerk ml-2"
                style={{
                  color: nightMode ? "#FFFFFF" : "black",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                Day {currentEvent.day}
              </motion.p>
            </div>
            <div className="relative flex 2xl:mt-16 2xl:mb-20">
            <motion.div
                className="font-mono rounded-[50px] p-12 shadow-xl text-center border-8 w-[650px]"
                style={{
                  backgroundColor: nightMode
                    ? "rgba(255, 255, 255, 0.7)"
                    : "white",
                  color: "black",
                  borderColor: nightMode ? "white" : "black",
                  transition:
                    "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
                    maxWidth: "650px",
                }}
              >
                <p className="text-5xl">{currentEvent.time}</p>
                <p className="text-5xl whitespace-normal overflow-hidden" style={{ wordBreak: 'break-word' }}>
                  {currentEvent.event}
                </p>
              </motion.div>
            </div>
            <div className="relative w-full h-32 flex justify-start items-center z-10">
              <div
                  ref={timelineLineRef}
                className="absolute left-[20%] top-1/2 w-10 h-8 bg-red-500/10 -translate-x-5 -translate-y-1/2 z-10" />
              <div className="absolute left-[20%] top-1/2 w-0.5 h-8 bg-red-500 -translate-y-1/2 z-20" />
              <div
                className="absolute top-1/2 w-[100%] h-1"
                style={{
                  backgroundColor: nightMode ? "white" : "black",
                  transition: "background-color 0.5s ease-in-out",
                }}
              />
               <motion.div
                  ref={clouddudeRef}
                  className="absolute ml-60 -translate-x-1/2 z-30"
                  animate={{ y: cloudDudeY }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 1,
                    duration: 0.1,
                  }}
                  style={{
                    backgroundImage: `url(${clouddudeImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: "150px",
                    height: "150px",
                    transform: `translate(-50%, -50%) scale(1.5)`,
                  }}
                />
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
                    <motion.div
                      className="timeline-dot w-6 h-6 rounded-full border-4 transition-colors duration-300"
                      style={{
                        backgroundColor: nightMode
                          ? activeCircle === index
                            ? "white"
                            : "#1E1E1E"
                          : activeCircle === index
                          ? "black"
                          : "white",
                        borderColor: nightMode ? "white" : "black",
                        transition:
                          "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
                      }}
                    />
                    <div className="mt-2 text-center font-mono whitespace-nowrap mb-2">
                      <motion.p
                        className="text-4xl font-medium ml-3"
                        style={{
                          color: nightMode ? "white" : "black",
                          transition: "color 0.5s ease-in-out",
                        }}
                      >
                        {event.time}
                      </motion.p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default AnimatedTimeline;