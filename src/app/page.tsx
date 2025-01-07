import React from 'react';
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

const CombinedPage: React.FC = () => {
  return (
    <LoaderScreen>
      <div className='overflow-hidden bg-[#A85059]'>
        <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
        <SlantedBanner starsImageUrl={frameImage} />
        <About />
        <Tracks />
        <Sponsors />
        <Prizes />
        <Faq />
        <Footer></Footer>
      </div>
    </LoaderScreen>
  );
};

export default CombinedPage;
