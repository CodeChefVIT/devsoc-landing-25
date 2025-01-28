"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import { events } from "./timelineData";

function Timeline() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [lineHeight, setLineHeight] = useState("100%");
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineTopOffset, setLineTopOffset] = useState("0px");
  const [lineLeftOffset, setLineLeftOffset] = useState("0px");

  const isNightTime = (time: string): boolean => {
    const match = time.match(/(\d{1,2}):(\d{2})\s?(am|pm)/i);
    if (!match) return false;

    let hour = parseInt(match[1]);
    const modifier = match[3];

    if (modifier.toLowerCase() === "pm" && hour !== 12) hour += 12;
    if (modifier.toLowerCase() === "am" && hour === 12) hour = 0;

    return hour >= 18 || hour < 6;
  };

  useEffect(() => {
    const updateLineHeightAndOffset = () => {
      if (timelineRef.current) {
        const firstDot = timelineRef.current.querySelector(
          ".vertical-timeline-element-icon"
        );
        const lastDot = timelineRef.current.querySelectorAll(
          ".vertical-timeline-element-icon"
        );
        const lastDotElement = lastDot[lastDot.length - 1];

        if (firstDot && lastDotElement) {
          const firstDotRect = firstDot.getBoundingClientRect();
          const lastDotRect = lastDotElement.getBoundingClientRect();
          const containerRect = timelineRef.current.getBoundingClientRect();

          const height =
            lastDotRect.top + lastDotRect.height / 2 - firstDotRect.top;

          setLineHeight(`${height}px`);
          const dotLeft =
            firstDotRect.left - containerRect.left + firstDotRect.width / 2;
          setLineLeftOffset(`${dotLeft}px`);

          const dotTop =
            firstDotRect.top - containerRect.top + firstDotRect.height / 2;
          setLineTopOffset(`${dotTop}px`);
        }
      }
    };

    updateLineHeightAndOffset();
    window.addEventListener("resize", updateLineHeightAndOffset);
    return () =>
      window.removeEventListener("resize", updateLineHeightAndOffset);
  }, []);

  useEffect(() => {
    let lastPos = 0;
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const curretnScrollPos = window.scrollY;
      const allevents = Array.from(
        timelineRef.current.querySelectorAll(".vertical-timeline-element")
      );
      const isScrollingDown = curretnScrollPos > lastPos;
      lastPos = curretnScrollPos;
      if (isScrollingDown) {
        for (let i = allevents.length - 1; i >= 0; i--) {
          const element = allevents[i];
          const elRect = element.getBoundingClientRect();

          if (elRect.top >= 0 && elRect.top <= window.innerHeight) {
            // console.log(element)
            const theEvent = element.querySelector(".content-title");
            if (theEvent) {
              const time = theEvent.textContent || "";
              setIsNightMode(isNightTime(time));
            }
            break;
          }
        }
      } else {
        for (let i = allevents.length - 1; i >= 0; i--) {
          const element = allevents[i];
          const elRect = element.getBoundingClientRect();

          if (elRect.top >= 0 && elRect.top <= window.innerHeight) {
            // console.log(element);
            const theEvent = element.querySelector(".content-title");
            if (theEvent) {
              const time = theEvent.textContent || "";
              setIsNightMode(isNightTime(time));
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultIconStyle = {
    background: isNightMode ? "white" : "black",
    color: isNightMode ? "#1E1E1E" : "#fff",
    border: `2px solid ${isNightMode ? "white" : "black"}`,
    width: "25px",
    height: "25px",
  };
  const cloudImageUrl = isNightMode
    ? "/assets/Cloudmobblack.svg"
    : "/assets/Cloudmob.svg";

  return (
    <>
      <motion.div
        id="timeline"
        className={`p-4 px-8 relative ${
          isNightMode ? "bg-[#1E1E1E]" : "bg-white"
        }`}
        style={{
          transition: "background-color 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 opacity-100 z-0 top-32">
          <Image
            src={`${cloudImageUrl}`}
            alt="Cloud Background"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {isNightMode && (
          <div className="absolute inset-0 opacity-100 z-0 top-20 ml-12">
            <Image
              src="/assets/Mobstar.svg"
              alt="Star Background"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        )}
        <motion.div
          className={`pt-20 flex justify-center pb-7 relative z-10 text-4xl font-yerk font-bold ${
            isNightMode ? "text-[#FF9737]" : "text-[#242323]"
          }`}
          style={{
            transition: "color 0.5s ease-in-out",
          }}
        >
          Timeline
        </motion.div>
        {/* <motion.div
          className={`mb-20 ml-2 relative z-10 text-3xl font-yerk font-bold ${
            isNightMode ? "text-white" : "text-[#242323]"
          }`}
           style={{
                transition: "color 0.5s ease-in-out",
           }}
        >
          Day 2
        </motion.div> */}

        <div
          className="timeline-container relative z-10 mt-6"
          ref={timelineRef}
        >
          <div
            className="timeline-line"
            style={{
              backgroundColor: isNightMode ? "#FFFFFF" : "black",
              height: lineHeight,
              top: lineTopOffset,
              left: lineLeftOffset,
              transition: "background-color 0.5s ease-in-out",
            }}
          />
          <VerticalTimeline lineColor="transparent">
            {events.map((event, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                style={{ marginBottom: "80px" }}
                contentStyle={{
                  background: isNightMode ? "rgba(255,255,255,0.7)" : "white",
                  color: isNightMode ? "black" : "black",
                  border: `4px solid ${isNightMode ? "white" : "black"}`,
                  boxShadow: "none",
                  borderRadius: "25px",
                  height: "fit-content",
                  minWidth: "300px",
                  transition:
                    "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${isNightMode ? "white" : "black"}`,
                  top: "50%",
                  marginTop: "-7px",
                  transition: "border-color 0.5s ease-in-out",
                }}
                iconStyle={{ ...defaultIconStyle }}
              >
                <motion.h3
                  className={`vertical-timeline-element-title font-mono pl-3 text-2xl content-title ${
                    isNightMode ? "text-black" : "text-black"
                  }`}
                  style={{
                    transition: "color 0.5s ease-in-out",
                  }}
                >
                  {event.time}
                </motion.h3>
                <motion.h3
                  className={`vertical-timeline-element-subtitle font-mono text-2xl pl-3 content-subtitle ${
                    isNightMode ? "text-black" : "text-black"
                  }`}
                  style={{
                    transition: "color 0.5s ease-in-out",
                  }}
                >
                  {event.event}
                </motion.h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  );
}

export default Timeline;
