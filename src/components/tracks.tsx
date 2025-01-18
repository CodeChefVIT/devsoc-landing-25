'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

const Tracks: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const isInView = useInView(trackRef, { once: true });

  const trackX = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const trackY = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const initialTrackStyle = { x: 0, y: 0 };
  const animatedTrackStyle = { x: trackX, y: trackY };

  const buttonContent: { [key: string]: { title: string; description: string } } = {
    'Track 1': {
      title: 'Open Innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'Track 2': {
      title: 'Kuchbhi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'Track 3': {
      title: 'Yaha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'Track 4': {
      title: 'Daal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'Track 5': {
      title: 'Do',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    'Track 6': {
      title: 'yaha pe bhi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsPopupVisible(false);
            setActiveButton(null);
            setIsClosing(false);
        }, 300);
    };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (buttonText: string) => {
    if (isPopupVisible) {
      handleClose();
    } else {
      setActiveButton(buttonText);
      setIsPopupVisible(true);
    }
  };

  return (
    <div style={{ 
      position: "relative", 
      width: "100%", 
      height: "120vh", 
      overflow: "hidden", 
      minHeight: '100vh', 
      overflowX: 'hidden' 
    }}>
      <Image
        src="/tracksnew.svg"
        alt="Tracks"
        width={470}
        height={100}
        style={{
          position: 'absolute',
          flexShrink: 0,
          borderRadius: '12px',
          opacity: 2,
          left: '505px',
          top: '300px',
          zIndex: 1,
        }}
      />

      <motion.div
        ref={trackRef}
        style={{
          position: "absolute",
          width: "130vw",
          height: "10000px",
          flexShrink: 0,
          top: "-5000px",
          left: "650px",
          zIndex: 1,
          ...(isInView ? animatedTrackStyle : initialTrackStyle),
        }}
      >
        <Image src="/trackk.svg" alt="Combined Track" layout="fill" />
      </motion.div>

      <div style={{ zIndex: 2, position: "relative" }}>
        <h1
          style={{
            display: 'flex',
            width: '688px',
             maxWidth: '90%',
            height: '170px',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Yerk',
             fontSize: '75px',
            fontWeight: 400,
            padding: '20px',
             borderRadius: '10px',
            textShadow: '2px 2px 10px #994952',
            filter: isPopupVisible ? 'blur(1px)' : 'none',
             transition: 'all 0.3s ease-in-out'
          }}
        >
          Tracks
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
             gap: '35px',
            justifyContent: 'center',
           marginTop: '10px',
           marginLeft: '150px',
          }}
        >
          {['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6'].map((buttonText, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(buttonText)}
              style={{
                display: 'flex',
                justifyContent: 'center',
               alignItems: 'center',
                width: '200px',
                 height: '57px',
                padding: '0',
                borderRadius: '12px',
                background: '#994952',
                boxShadow: '6px 6px 0px 0px #FFF',
                 color: '#FFF',
                 border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                 fontFamily: '"Monomaniac One"',
                fontSize: '25px',
                letterSpacing: '0.5px',
                 zIndex: 2,
                filter: isPopupVisible && activeButton !== buttonText ? 'blur(1px)' : 'none',
                 transition: 'all 0.3s ease-in-out',
              }}
               onMouseEnter={(e) => {
                  if(!isPopupVisible){
                     e.currentTarget.style.background = '#BA617F';
                  e.currentTarget.style.transform = 'scale(1.05)';
                 }
                }}
               onMouseLeave={(e) => {
                   e.currentTarget.style.background = '#994952';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
            >
              {buttonText}
            </button>
          ))}
        </div>
      </div>

        {isPopupVisible && activeButton && (
            <div
              ref={popupRef}
              style={{
                  position: "absolute",
                  maxWidth: "90%",
                  width: '713px',
                   height: 'auto',
                   padding: "28px 24px",
                    flexDirection: "column",
                   alignItems: "flex-start",
                 gap: "36px",
                 borderRadius: "12px",
                  background: "#994952",
                    boxShadow: "6px 6px 0px 0px #FFF",
                   top: "260px",
                    left: "50%",
                  transform: 'translateX(-50%)',
                  zIndex: 1000,
                 
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.5 : 1 }}
                    transition={{ duration: 0.3 }}
                     style={{
                         height: '100%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                        alignItems: 'center',
                       }}
                >
                    <h2
                        style={{
                           color: "#FFF",
                           textAlign: "center",
                             fontFamily: "Monomaniac One",
                            fontSize: "44px",
                             fontWeight: 400,
                            lineHeight: "160%",
                           marginBottom: '20px',
                     }}
                     >
                          {buttonContent[activeButton]?.title}
                    </h2>
                     <p
                         style={{
                             color: "#FFF",
                              textAlign: "center",
                            fontFamily: "Proxima Nova",
                            fontSize: "24px",
                              fontWeight: 400,
                            lineHeight: "160%",
                        }}
                      >
                         {buttonContent[activeButton]?.description}
                     </p>
                   </motion.div>
             </div>
          )}

      <div
          style={{
              display: isPopupVisible ? 'block' : 'none',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
             zIndex: 1,
             backdropFilter: 'blur(1px)',
               transition: 'all 0.3s ease-in-out',
         }}
       />
    </div>
  );
};

export default Tracks;
