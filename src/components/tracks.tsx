'use client';

import React, { useState, useEffect, useRef } from "react";

const Tracks: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);

  const buttonContent: { [key: string]: { title: string, description: string } } = {
    'Track 1': {
      title: 'Open Innovation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Track 2': {
      title: 'Kuchbhi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Track 3': {
      title: 'Yaha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Track 4': {
      title: 'Daal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Track 5': {
      title: 'Do',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    'Track 6': {
      title: 'yaha pe bhi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupVisible(false);
        setActiveButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
    setIsPopupVisible(true);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "250vh", overflow: "hidden" }}>
      <img
        src="/tracks.svg"
        alt="Tracks"
        style={{
          position: 'absolute',
          width: '309px',
          height: '385px',
          flexShrink: 0,
          borderRadius: '12px',
          opacity: 0.7,
          background: '#D9D9D9',
          left: '565px',
          top: '543px',
          right: '566px',
          bottom: '96px',
          zIndex: 1,
        }}
      />
     <img
  src="/track1.svg"
  alt="Track Background"
  style={{
    position: "absolute",
    width: "100vw",
    height: "1010.578px",
    transform: "rotate(2deg)",
    flexShrink: 0,
    top: "-200px",
    left: "800",
    right: "-210px",
    zIndex: 1,
  }}
/>
<img
  src="/track2.svg"
  alt="Track Background"
  style={{
    position: "absolute",
    width: "100vw", 
    height: "1110.578px", 
    transform: "rotate(-2deg)",
    flexShrink: 0,
    top: "-100px",
    left: "200px",
    right: "-1000px",
    bottom: "-0px",
    zIndex: 1,
  }}
/>
<img
  src="/track3.svg"
  alt="Track Background"
  style={{
    position: "absolute",
    width: "110vw", 
    height: "1147.578px", 
    transform: "rotate(-1deg)",
    flexShrink: 0,
    top: "-40px",
    left: "155px",
    right: "-600px",
    bottom: "0",
    zIndex: 1,
  }}
/>
<img
  src="/track4.svg"
  alt="Track Background"
  style={{
    position: "absolute",
    width: "100vw", 
    height: "1140.578px", 
    transform: "rotate(0deg)",
    flexShrink: 0,
    top: "-90px",
    left: "45px",
    right: "0",
    bottom: "0",
    zIndex: 1,
  }}
/>

      <div style={{ zIndex: 2, position: "relative" }}>
        <h1
          style={{
            display: 'flex',
            width: '688px',
            height: '192px',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'Yerk',
            fontSize: '75px',
            fontWeight: 400,
            padding: '20px',
            borderRadius: '10px',
            textShadow: '2px 2px 10px #994952'
          }}
        >
          Tracks
        </h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            justifyContent: 'center',
            marginTop: '20px',
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
                width: '193px',
                height: '50px',
                padding: '0',
                borderRadius: '12px',
                background: '#994952',
                boxShadow: '6px 6px 0px 0px #FFF',
                color: '#FFF',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'center',
                fontFamily: '"Monomaniac One"',
                fontSize: '20px',
                letterSpacing: '0.5px',
                zIndex: 2,
                filter: isPopupVisible && activeButton !== buttonText ? 'blur(1px)' : 'none',
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
            width: "713px",
            height: "404px",
            padding: "28px 24px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "36px",
            borderRadius: "12px",
            background: "#994952",
            boxShadow: "6px 6px 0px 0px #FFF",
            top: "260px",
            left: "383px",
            zIndex: 1000,
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
          pointerEvents: 'none',
        }}
      ></div>
    </div>
  );
};

export default Tracks;