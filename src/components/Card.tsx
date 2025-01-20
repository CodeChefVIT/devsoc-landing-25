// components/Card.tsx
import React from 'react';
import { StaticImageData } from 'next/image';

interface CardProps {
  name: string;
  image: string | StaticImageData;
  url: string;
}

const Card: React.FC<CardProps> = ({ name, image, url }) => {
    const handleClick = () => {
    window.open(url, '_blank'); // Open link in a new tab
  };

  return (
    <div className="lg:w-[350px] w-[200px] xs:w-[200px] h-[300px] xs:h-[210px] bg-[#FFEAD8] rounded-xl flex flex-col items-center justify-between p-5 text-center">
      <h3 className=" sm:text-[32px] font-mono text-black text-[22px]">{name}</h3>
      <div
        className="bg-black rounded-lg bg-cover bg-center relative"
        style={{
          width: '100%',
          height: '60%',
        }}
      >
      <div style={{
          width: '70%', // Set your manual width
          height: '70%', // Set your manual height
          backgroundImage: `url(${typeof image === 'string' ? image : image.src})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
           position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}/>
      </div>
      <button
      onClick={handleClick}
        className="bg-[#FF7657] text-white text-[18px] font-yerk font-bold py-2 px-6 rounded-md hover:bg-[#ff5630] transition duration-300"
      >
        VISIT
      </button>
    </div>
  );
};

export default Card;