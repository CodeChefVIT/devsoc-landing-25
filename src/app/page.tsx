import React from 'react';
import LoaderScreen from '@/components/LoaderScreen';

import Tracks from '@/components/tracks';
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
      <div style={{ backgroundColor: '#48634A', minHeight: '100vh', overflowX: 'hidden' }}>
        <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
        <SlantedBanner starsImageUrl={frameImage} />
        <About />
        <Tracks />
        <Prizes />
        <Faq/>
        <Footer></Footer>
      </div>
    </LoaderScreen>
  );
};

export default CombinedPage;
