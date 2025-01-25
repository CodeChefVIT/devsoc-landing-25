'use client'
import React from 'react'

import { motion } from 'framer-motion';


interface DialogProps {
    regClicked: boolean;
    setRegClicked: (clicked: boolean) => void;

}

export default function RegComp({ regClicked,  setRegClicked}: DialogProps) {
    if (!regClicked) {
        return null;
    }

    return (
        <motion.div
            id="faq"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B5862] bg-opacity-70 backdrop-blur-sm "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="relative bg-[#4B5862] border-8 border-[#FFCE00] text-white font-mono p-6 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col items-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute top-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute top-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>

                <p className="text-center text-[1.5rem] font-medium my-12">{"Head over to VTOP -> SW Events -> Event Registration -> Yantra 25 - DevSOC’25 to secure your spot now! "}</p>
                <button
                    onClick={()=>{setRegClicked(false)}}
                    className="bg-[#FFCE00] text-[#125A76] font-yerk py-2 px-6 rounded-lg hover:bg-[#e6b800] my-4"
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    );
};
