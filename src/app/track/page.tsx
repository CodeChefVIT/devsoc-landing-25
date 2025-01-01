// app/track/page.tsx
import React from 'react';
import Tracks from '@/components/tracks';

const TrackPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#48634A', minHeight: '100vh' }}>
      <Tracks />
    </div>
  );
};

export default TrackPage;
