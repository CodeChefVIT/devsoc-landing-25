import React from 'react'
import Image from 'next/image'
import FaqButtons from '../components/FaqButtons'

const page = () => {
  const faqs: string[] = [
    'This is the best event in South East Asia, as well as Karan is the best CP',
    'Hola',
    'JP',
    'Okay'
  ];

  return (
    <div className='h-screen w-screen bg-[#125A76] relative flex flex-col justify-center '>
      
        <h1 className='text-[6rem] text-[#FF9737] font-bold z-10 mx-24 relative'>
          FAQs
        </h1>
    <div className='flex items-center justify-center'>

      <div className='flex flex-col space-y-10 p-6 w-[50%] relative z-10'>
        {faqs.map((faq, index) => (
          <FaqButtons text={faq} key={index} />
        ))}
      </div>


      <div className='h-[500px] w-[40%] relative z-10'>
        <Image 
          src="/faqscreen.svg" 
          alt="FAQ Screen" 
          layout="fill" 
          objectFit="contain" 
          className="relative inset-0 z-10" 
        />
      </div>
        </div>
      

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

export default page
