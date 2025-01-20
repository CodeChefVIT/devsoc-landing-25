'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';
import peek from '../assets/images/peek.png'
import logo from '../assets/images/Lappylogo.svg'


interface ButtonProps {
    text: string
    onClick: () => void;
}

const FaqButtons = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className='bg-[#FF7657] text-white font-mono py-4 px-8 rounded-[10px] w-[80vw] lg:w-[36vw] h-[12vh] max-[320px]:text-[0.7rem] text-[0.8rem]   lg:text-[1.2rem] xl:text-[1.2rem] flex items-center justify-center text-start shadow-[0_4px_6px_rgba(0,0,0,0.1),10px_10px_0px_#FF9737] active:translate-y-[10px] active:translate-x-[10px] active:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition'>
            {text}
        </button>
    )
}

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}


const FaqDialog = ({ isOpen, onClose, content }: DialogProps) => {
    if (!isOpen) {
        return null;
    }

    return (
        <motion.div
            id="faq"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B5862] bg-opacity-70 backdrop-blur-sm lg:hidden"
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

                <p className="text-center text-[1.5rem] font-medium my-12">{content}</p>
                <button
                    onClick={onClose}
                    className="bg-[#FFCE00] text-[#125A76] font-yerk py-2 px-6 rounded-lg hover:bg-[#e6b800] my-4"
                >
                    Close
                </button>
            </motion.div>
        </motion.div>
    );
};



interface LaptopProps {
    faqans: string | null;
}

const Laptop = ({ faqans }: LaptopProps) => {
    return (
        <div className="relative w-full max-w-[600px] mx-auto lg:my-28 flex">
            <div className="absolute inset-0 z-20 justify-center items-center bg-transparent text-white font-mono text-center py-8 px-12 lg:text-[1rem] xl:text-[1.5rem] font-bold hidden lg:flex">
                {faqans ? faqans :
                    <Image
                        src={logo}
                        alt="Logo"
                        width={200}
                        height={200}
                        className="mx-auto mt-10"
                    />}
            </div>

            <div className="relative w-full mt-16">
                <div className="relative hidden lg:block">

                    <Image
                        src="/faqscreen.svg"
                        alt="FAQ Screen"
                        layout="responsive"
                        width={600}
                        height={375}
                        className="z-10"
                    />
                    <Image
                        src={peek}
                        alt="Overlay Image"
                        width={350}
                        height={100}
                        className="absolute top-[-7.8rem] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20"
                    />
                </div>
            </div>
        </div>
    );
};


const Faq = () => {
    const faqs: { question: string; answer: string }[] = [
        {
            question: 'Is the hackathon free to attend?',
            answer: "Yes! DevSOC'25 is completely free to attend thanks to our sponsors.",
        },
        {
            question: 'How many team members do I need to have?',
            answer: 'This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills.',
        },
        {
            question: "I don't have much experience with coding or tech events. Should I still participate?",
            answer: "We evaluate participants based on various metrics, considering if you're a fresher and where you stand among peers. If you lack technical experience, this is a great chance to build a foundation, interact with seniors, and gain valuable guidance. If you're interested in tech, you're welcome to join!",
        },
        {
            question: 'Will there be mentorship available during the hackathon?',
            answer: 'Yes, mentors from various domains will be available throughout the event to guide you, provide feedback on your projects, and help you overcome any challenges you face during the hackathon.',
        },
        {
            question: 'Have any more queries?',
            answer: 'If you have any further doubts, feel free to ask your doubts on our Discord server.',
        },
        
    ];

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


    const getFaqAnswer = () => {
        if (selectedIndex !== null) {
            return faqs[selectedIndex].answer;
        }
        return null;
    }

    return (
        <div className='h-full relative flex flex-col justify-center pb-[140px] md:pb-[230px]'>

            <h1 className='text-center lg:text-start lg:text-[5rem] text-[4rem] text-[#FF9737] font-bold z-10 lg:mx-14 relative font-yerk my-6 lg:my-0 lg:pt-12'>
                FAQs
            </h1>
            <div className='flex items-center justify-center'>

                <div className='flex flex-col space-y-10 p-6 w-[50%] relative z-10'>
                    {faqs.map((faq, index) => (
                        <FaqButtons text={faq.question} key={index} onClick={() => setSelectedIndex(index)} />
                    ))}
                </div>


                <div className='lg:h-[626.67px] w-[40%] relative z-10'>
                    <Laptop faqans={getFaqAnswer()} />
                </div>
            </div>

            {/* <FaqDialog isOpen={selectedIndex !== null} onClose={() => setSelectedIndex(null)} content={selectedIndex !== null ? faqs[selectedIndex].answer : ''} /> */}

            <FaqDialog
                isOpen={selectedIndex !== null}
                onClose={() => setSelectedIndex(null)}
                content={selectedIndex !== null ? faqs[selectedIndex].answer : ''}
            />

            <Image
                src="/faqbg.svg"
                alt="FAQ Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-50"
            />

        </div>
    )
}

export default Faq