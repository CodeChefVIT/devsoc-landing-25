'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';



interface ButtonProps {
  text: string
  onClick: () => void;
}

const FaqButtons = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='bg-[#FF7657] text-white font-yerk py-4 px-8 rounded-[10px] w-[80vw] lg:w-[36vw] h-[12vh] text-[0.8rem] lg:text-[1rem] flex items-center justify-center text-start shadow-[0_4px_6px_rgba(0,0,0,0.1),10px_10px_0px_#FF9737] active:translate-y-[10px] active:translate-x-[10px] active:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition'>
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
    <div id='faq' className="fixed inset-0 z-50 flex items-center justify-center bg-[#4B5862] bg-opacity-70 backdrop-blur-sm lg:hidden">
      <div className="relative bg-[#4B5862] border-8 border-[#FFCE00] text-white font-yerk p-6 rounded-lg shadow-lg w-[90%] max-w-md flex flex-col items-center">
        <div className="absolute top-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-0 left-0 m-2 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute bottom-0 right-0 m-2 w-4 h-4 bg-white rounded-full"></div>

        <p className="text-center text-lg font-medium my-12">{content}</p>
        <button
          onClick={onClose}
          className="bg-[#FFCE00] text-[#125A76] font-yerk py-2 px-6 rounded-lg hover:bg-[#e6b800] my-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};


interface LaptopProps {
  faqans: string
}

const Laptop = ({ faqans }: LaptopProps) => {

  return (
    <>
      <div className="relative w-full max-w-[600px] mx-auto lg:my-28">
        <div className="absolute inset-0 z-20 justify-center items-center bg-transparent text-white font-yerk text-center py-8 px-12 text-[1rem] font-bold hidden lg:flex">
          {faqans}
        </div>
        <Image
          src="/faqscreen.svg"
          alt="FAQ Screen"
          layout="responsive"
          width={600}
          height={375}
          className="hidden lg:block z-10"
        />

      </div>
    </>
  );
};


const Faq = () => {
  const faqs: { question: string; answer: string }[] = [
    {
      question: 'This is the best event in South East Asia, as well as Karan is the best CP',
      answer: '1 This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and CodeChef is the best innovative club in VIT.',
    },
    {
      question: 'Hola',
      answer: '2 This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and CodeChef is the best innovative club in VIT.',
    },
    {
      question: 'JP',
      answer: '3 This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and CodeChef is the best innovative club in VIT.',
    },
    {
      question: 'Okay',
      answer: '4 This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and CodeChef is the best innovative club in VIT.',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className='lg:h-[110vh] h-screen bg-[#125A76] relative flex flex-col justify-center '>

      <h1 className='text-center lg:text-start lg:text-[6rem] text-[4rem] text-[#FF9737] font-bold z-10 lg:mx-24 relative font-yerk mt-8 '>
        FAQs
      </h1>
      <div className='flex items-center justify-center'>

        <div className='flex flex-col space-y-10 p-6 w-[50%] relative z-10'>
          {faqs.map((faq, index) => (
            <FaqButtons text={faq.question} key={index} onClick={() => setSelectedIndex(index)} />
          ))}
        </div>


        <div className='h-[626.67px] w-[40%] relative z-10'>
          <Laptop faqans={selectedIndex !== null ? faqs[selectedIndex].answer : ''} />
        </div>
      </div>

      <FaqDialog isOpen={selectedIndex !== null} onClose={() => setSelectedIndex(null)} content={selectedIndex !== null ? faqs[selectedIndex].answer : ''} />

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
