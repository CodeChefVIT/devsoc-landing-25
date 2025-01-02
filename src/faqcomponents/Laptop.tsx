import React from 'react';
import Image from 'next/image';

interface Props {
    faqans: string
    }

const Laptop = ({faqans}: Props) => {

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

export default Laptop;
