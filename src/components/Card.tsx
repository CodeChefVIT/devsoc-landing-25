// components/Card.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

interface CardProps {

  image: string | StaticImageData;
  url: string;
}

const Card: React.FC<CardProps> = ({ image, url }) => {
    const handleClick = () => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className="lg:w-[350px] w-[200px] xs:w-[200px] h-[200px] xs:h-[210px] bg-[#FFEAD8] rounded-xl flex flex-col items-center justify-between p-5 text-center">
      
      <div
        className="bg-[#FFEAD8] rounded-lg bg-cover bg-center relative"
        style={{
          width: '100%',
          height: '70%',
        }}
      >
      <div
  className="
    w-[150px] h-full    // Default width and height for larger devices
    sm:w-[160px] sm:h-3/5 // Width and height for small devices
    md:w-[160px] md:h-full // Width and height for medium devices
    lg:w-[250px] lg:h-[90px]
    bg-contain bg-no-repeat bg-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  style={{
    backgroundImage: `url(${typeof image === 'string' ? image : image.src})`,
  }}
></div>
      </div>
      <button
      onClick={handleClick}
        className="bg-[#FF7657] text-white text-[12px] sm:text-[18px] font-yerk font-bold py-2 px-6 rounded-md hover:bg-[#ff5630] transition duration-300"
      >
        VISIT
      </button>
    </div>
  );
};

export default Card;