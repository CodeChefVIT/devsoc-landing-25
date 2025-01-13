import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import background from "../assets/images/gallery.svg";
import image1 from "../assets/images/img3.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img1.png";
import image5 from "../assets/images/img5.png";
import image4 from "../assets/images/img4.png";
import image6 from "../assets/images/img6.png";
import image8 from "../assets/images/img8.png";
import image10 from "../assets/images/img10.png";
import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image5 },
    { src: image10 },
    { src: image8 },
    { src: image4 },
    { src: image6 },
  ];

  const infiniteImages = [...images, ...images, ...images];
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScrollReset = () => {
      if (!scrollContainer) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      // Reset to the middle for seamless infinite scrolling
      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth / 3 - clientWidth;
      } else if (scrollLeft >= scrollWidth - clientWidth) {
        scrollContainer.scrollLeft = scrollWidth / 3;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScrollReset);
      // Set initial scroll position to the middle
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

      return () => {
        scrollContainer.removeEventListener("scroll", handleScrollReset);
      };
    }
  }, []);

  return (
    <div
      className="relative h-[119vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      {/* <div className="absolute inset-0 bg-beige/90 z-10" /> */}
      <div className="flex justify-center md:justify-start lg:pl-12 pt-8">
        <div className="bg-[#FFE6D4] w-fit">
          <h1 className="text-4xl md:text-7xl font-bold text-black font-yerk p-4">
            GALLERY
          </h1>
        </div>
      </div>
      <div className="flex items-center pt-12 md:pt-5 2xl:pt-24 justify-center text-black">
        <div className="relative flex items-center justify-center w-full">
        <div className="custom-shape-divider-top-1736700184 z-30">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                fill="#FFE6D4"
              ></path>
            </svg>
          </div>
          <motion.div
            ref={scrollRef}
            className="flex overflow-x-scroll gap-8 snap-x snap-mandatory px-4 bg-[#FFE6D4] w-full h-full border-[2px] border-white 2xl:py-4"
          >
            {infiniteImages.map((image, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-64 h-96 items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
          <div className="custom-shape-divider-bottom-1736700813">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                fill="#FFE6D4"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
