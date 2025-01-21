import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import background from "../assets/images/gallery.svg";
import image1 from "../assets/images/img3.webp";
import image2 from "../assets/images/img2.webp";
import image3 from "../assets/images/img1.webp";
import image5 from "../assets/images/img5.webp";
import image4 from "../assets/images/img4.webp";
import image6 from "../assets/images/img6.webp";
import image8 from "../assets/images/img8.webp";
import image10 from "../assets/images/img10.webp";
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
      className="flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      {/* <div className="absolute inset-0 bg-beige/90 z-10" /> */}
      <div className="flex justify-center md:justify-start lg:pl-8 absolute left-0 right-0 pt-8">
        <div className="bg-[#FFE6D4] w-fit">
          <h1 className="text-5xl md:text-7xl font-bold text-black font-yerk p-4">
            GALLERY
          </h1>
        </div>
      </div>
      <div className="text-black my-72 sm:my-auto">
        <div className="relative flex items-center justify-center w-full">
        <div className="hidden sm:block custom-shape-divider-top-1736700184 z-30">
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
            className="flex overflow-x-scroll gap-8 snap-x snap-mandatory px-4 bg-[#FFE6D4] w-full h-full border-[2px] border-white 2xl:py-4 pt-4 sm:p-0 "
          >
            {infiniteImages.map((image, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-64 h-64 sm:h-96 items-center justify-center rounded-lg overflow-hiddenc "
              >
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index}`}
                  className="w-full h-60 sm:h-full object-cover rounded-lg "
                />
              </div>
            ))}
          </motion.div>
          <div className="hidden sm:block custom-shape-divider-bottom-1736700813">
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
