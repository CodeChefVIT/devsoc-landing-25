// CombinedPage.tsx
"use client";
import React, { useState, useEffect } from 'react';
import LoaderScreen from '@/components/LoaderScreen';
import Tracks from '@/components/tracks';
import Sponsors from '@/components/Sponsors';
import Prizes from '@/components/Prizes';
import About from '@/components/About';
import Faq from '@/components/Faq';
import HomePage from '@/components/Homepage';
import SlantedBanner from '@/components/SlantedBanner';
import Footer from '@/components/Footer';
import frameImage from '../assets/images/Frame 34.png';
import bgHomeImage from '../assets/images/Frame 53.png';
import peekImage from '../assets/images/Group 236.png';
import AnimatedTimeline from '@/components/Timeline';
import Timeline from '@/components/Timelinesm';
import TracksMobile from '@/components/Trackssm';



const CombinedPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize(); // Initial check on mount
    window.addEventListener('resize', handleResize); // Check on resize

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <LoaderScreen>
      <div className='overflow-hidden bg-[#A85059]'>
        <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
        <SlantedBanner starsImageUrl={frameImage} />
        <About />
        <div className="relative">
          {isMobile ? <Timeline /> : <AnimatedTimeline />}
           <div
              className="relative"
                style={{
                  marginTop: isMobile ? '0' : '-110vh'
               }}
            >
                {isMobile ? <TracksMobile /> : <Tracks />}
                <Sponsors />
                <Prizes />
                <Faq />
                <Footer />
           </div>
        </div>
      </div>
    </LoaderScreen>
  );
};

export default CombinedPage;