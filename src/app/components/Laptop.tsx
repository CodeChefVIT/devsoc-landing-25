import React from 'react';
import Image from 'next/image';

const Laptop = () => {
  return (
    <div className="relative w-full max-w-[600px] mx-auto lg:my-28">
      {/* Content Div */}
      <div className="absolute inset-0 z-20 justify-center items-center bg-transparent text-white text-center py-8 px-12 text-[1.5rem] font-bold hidden lg:flex">
      This hackathon is a team competition where you can have 2-5 members in your team. Most teams aim to have a mix of people with both design and developer skills and codechef is the best innovative club in vit.
      </div>

      {/* Background Image */}
      <Image
        src="/faqscreen.svg"
        alt="FAQ Screen"
        layout="responsive"
        width={600}
        height={375}
        className="hidden lg:block z-10"
      />
    </div>
  );
};

export default Laptop;
