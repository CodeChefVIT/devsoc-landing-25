'use client'
import React from 'react'
import Image from 'next/image'
import FaqButtons from './FaqButtons'
import Laptop from './Laptop';
import { useState } from 'react';
import FaqDialog from './FaqDialog';

const Faq = () => {
  const faqs: string[] = [
    'This is the best event in South East Asia, as well as Karan is the best CP',
    'Hola',
    'JP',
    'Okay'
  ];

  const FAQans:string[]=[
    "1This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and codechef is the best innovative club in vit.",
    "2This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and codechef is the best innovative club in vit.",
    "3This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and codechef is the best innovative club in vit.",
    "4This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and codechef is the best innovative club in vit.",
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
          <FaqButtons text={faq} key={index} onClick={()=>setSelectedIndex(index)} />
        ))}
      </div>


      <div className='h-[626.67px] w-[40%] relative z-10'>
      <Laptop faqans={selectedIndex !== null ? FAQans[selectedIndex] : ''} />
      </div>
        </div>

      <FaqDialog isOpen={selectedIndex !== null} onClose={()=>setSelectedIndex(null)} content={selectedIndex !== null ? FAQans[selectedIndex] : ''} />
      
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
