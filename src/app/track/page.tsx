import React from 'react';
import Tracks from '@/components/tracks';
import Prizes from '@/components/Prizes';
import About from '@/components/About';

const CombinedPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#48634A', minHeight: '100vh' }}>
      <About />
      <Tracks />
      <Prizes />
    </div>
  );
};

export default CombinedPage;
