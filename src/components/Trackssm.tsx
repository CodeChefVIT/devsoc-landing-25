'use client';

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TracksMobile: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    const buttonContent: { [key: string]: { title: string; description: string } } = {
        'Track 1': { title: 'Open Innovation', description: 'Lorem ipsum dolor sit amet...' },
        'Track 2': { title: 'Kuchbhi', description: 'Lorem ipsum dolor sit amet...' },
        'Track 3': { title: 'Yaha', description: 'Lorem ipsum dolor sit amet...' },
        'Track 4': { title: 'Daal', description: 'Lorem ipsum dolor sit amet...' },
        'Track 5': { title: 'Do', description: 'Lorem ipsum dolor sit amet...' },
        'Track 6': { title: 'yaha pe bhi', description: 'Lorem ipsum dolor sit amet...' },
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

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsPopupVisible(false);
            setActiveButton(null);
            setIsClosing(false);
        }, 300);
    };

    const handleButtonClick = (buttonText: string) => {
        if (isPopupVisible) {
            handleClose();
        } else {
            setActiveButton(buttonText);
            setIsPopupVisible(true);
        }
    };

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '-30%',
                    width: '150%',
                    height: '100%',
                    opacity: 0.2,
                    zIndex: 1,
                    backgroundImage: `url('/trackk.svg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: isPopupVisible ? 'blur(3px)' : 'none',
                    transform: 'scale(1.5)',
                    transition: 'all 0.3s ease-in-out',
                }}
            />

            <div style={{ zIndex: 2, position: "relative", marginTop: '20px', textAlign: 'center' }}>
                <h1
                    style={{
                        color: '#FFF',
                        width:'100%',
                        fontFamily: 'Yerk',
                        fontSize: 'calc(3rem + 1vw)', 
                        fontWeight: 400,
                        textShadow: '2px 2px 10px #994952',
                        filter: isPopupVisible ? 'blur(3px)' : 'none',
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    Tracks
                </h1>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '20px',
                        padding: '0 10%',
                    }}
                >
                    {Object.keys(buttonContent).map((buttonText, index) => (
                        <button
                            key={index}
                            onClick={() => handleButtonClick(buttonText)}
                            style={{
                                width: '100%',
                                padding: '15px 20px',
                                borderRadius: '12px',
                                background: '#994952',
                                color: '#FFF',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontFamily: '"Monomaniac One"',
                                fontSize: 'clamp(20px, 2vw, 23px)', 
                                transition: 'transform 0.3s ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                if (!isPopupVisible) {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
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
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: '342px',
                        height: '492px',
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "30px",
                        borderRadius: "12px",
                        background: "#4B5862",
                        zIndex: 1000,
                    }}
                >
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: isClosing ? 0 : 1, scale: isClosing ? 0.5 : 1 }}
                        transition={{ duration: 0.3 }}
                        style={{ position: 'relative', width: '100%', height: '100%' }}
                    >
                                   
                        <div style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "#fff"
                        }} />
                       
<button
                onClick={handleClose}
                style={{
                    position: 'absolute',
                    top: '5px',
                    right:'10px',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'right',
                    border: 'none',
                    borderRadius: '50%',
                    color: '#FFF',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    zIndex: 1100,
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#D9534F'; 
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#994952'; 
                }}
            >
                ×
            </button>

                        <div style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "10px",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "#fff"
                        }} />
                        <div style={{
                            position: "absolute",
                            bottom: "10px",
                            right: "10px",
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "#fff"
                        }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            padding: '20px'
                        }}>
                            <h2 style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: "Yerk",
                                fontSize: "25px",
                                fontWeight: 400,
                                lineHeight: "160%",
                                marginBottom: '20px'
                            }}>
                                {buttonContent[activeButton]?.title}
                            </h2>
                            <p style={{
                                color: "#FFF",
                                textAlign: "center",
                                fontFamily: "Yerk",
                                fontSize: "16px",
                                fontWeight: 400,
                                lineHeight: "160%"
                            }}>
                                {buttonContent[activeButton]?.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}

            <div
                style={{
                    display: isPopupVisible ? 'block' : 'none',
                    position: 'fixed',
                    top: 0,
                   left: 0,
                    right: 0,
                    bottom: 0,
                   backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999,
                   backdropFilter: 'blur(2px)',
                }}
            />
        </div>
    );
};

export default TracksMobile;
