"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

const events = [
  { time: "11:00 am", event: "Hacking Starts" },
  { time: "2:30 pm", event: "Round 2" },
  { time: "6:00 pm", event: "Break" },
  { time: "8:30 pm", event: "Debugging Session" },
  { time: "11:00 am", event: "Hacking Starts" },
  { time: "2:30 pm", event: "Round 2" },
  { time: "6:00 pm", event: "Break" },
  { time: "8:30 pm", event: "Debugging Session" },
];

function Timeline() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [lineHeight, setLineHeight] = useState("100%");
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineTopOffset, setLineTopOffset] = useState("0px");
  const [lineLeftOffset, setLineLeftOffset] = useState("0px");

  const isNightTime = (time: string): boolean => {
    const match = time.match(/(\d+):(\d+)\s?(am|pm)/i);
    if (!match) return false;

    const [hourStr, modifier] = match;
    let hour = parseInt(hourStr, 10);

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

          // Calculate height from top of first dot to center of last dot
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
  }, [events.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElements = Array.from(
        timelineRef.current.querySelectorAll(".vertical-timeline-element")
      );

      let topMostElement: Element | null = null;
      let minDistance = Infinity;

      timelineElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          topMostElement = element;
        }
      });

      if (topMostElement) {
        const timeElement = (topMostElement as HTMLElement).querySelector(
          ".content-title"
        );
        if (timeElement) {
          const time = timeElement.textContent || "";
          setIsNightMode(isNightTime(time));
        }
      }
    };

    handleScroll();
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
      <div
        id="timeline"
        className={`p-4 px-8 relative ${
          isNightMode ? "bg-[#1E1E1E]" : "bg-white"
        }`}
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
        <div
          className={`pt-20 pb-7 relative z-10 text-4xl font-yerk font-bold ${
            isNightMode ? "text-[#FF9737]" : "text-[#242323]"
          }`}
        >
          Timeline
        </div>
        <div
          className={`mb-20 ml-2 relative z-10 text-3xl font-yerk font-bold ${
            isNightMode ? "text-white" : "text-[#242323]"
          }`}
        >
          Day 2
        </div>

        <div className="timeline-container relative z-10" ref={timelineRef}>
          <div
            className="timeline-line"
            style={{
              backgroundColor: isNightMode ? "#FFFFFF" : "black",
              height: lineHeight,
              top: lineTopOffset,
              left: lineLeftOffset,
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
                  height: "100px",
                  minWidth: "300px",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${isNightMode ? "white" : "black"}`,
                  top: "50%",
                  marginTop: "-7px",
                }}
                iconStyle={{ ...defaultIconStyle }}
              >
                <h3
                  className={`vertical-timeline-element-title font-mono pl-3 text-2xl content-title ${
                    isNightMode ? "text-black" : "text-black"
                  }`}
                >
                  {event.time}
                </h3>
                <h3
                  className={`vertical-timeline-element-subtitle font-mono text-2xl pl-3 content-subtitle whitespace-nowrap ${
                    isNightMode ? "text-black" : "text-black"
                  }`}
                >
                  {event.event}
                </h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Timeline;
