'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import Gallery from '@/components/Gallery';

const CombinedPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const initialSectionsRef = useRef<HTMLDivElement>(null);
  const postTimelineRef = useRef<HTMLDivElement>(null);
  const [timelineComplete, setTimelineComplete] = useState(false);

  // Scroll progress for initial sections (before Timeline)
  const { scrollYProgress: initialProgress } = useScroll({
    target: initialSectionsRef,
    offset: ["start start", "end end"]
  });

  // Separate scroll tracking for post-Timeline sections
  const { scrollYProgress: postTimelineProgress } = useScroll({
    target: postTimelineRef,
    offset: ["start start", "end end"]
  });

  // Initial sections color transition
  const initialBackgroundColor = useTransform(
    initialProgress,
    [0, 0.5, 1],
    ["#1B4965", "#A85059", "#A85059"]
  );

  // Post-Timeline color transition
  const postTimelineBackgroundColor = useTransform(
    postTimelineProgress,
    [0, 0.5, 0.6, 0.7, 0.8, 1],
    ["#000000","#48634A", "#60A2BB", "#fbead5", "#125A76", "#125A76"]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!postTimelineRef.current) return;
      const rect = postTimelineRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight;
      if (isInView !== timelineComplete) {
        setTimelineComplete(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineComplete]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <LoaderScreen>
      <div className="overflow-hidden">
        <motion.div 
          ref={initialSectionsRef}
          style={{ backgroundColor: initialBackgroundColor }}
        >
          <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
          <SlantedBanner sign='+' starsImageUrl={frameImage} />
          <About />
          <Gallery />
        </motion.div>

        {/* Timeline section with its own background handling */}
        <div className="relative">
          {isMobile ? <Timeline /> : <AnimatedTimeline />}
        </div>

        {/* Post-Timeline sections */}
        <motion.div
          ref={postTimelineRef}
          style={{
            backgroundColor: postTimelineBackgroundColor,
            marginTop: isMobile ? '0' : '-110vh'
          }}
        >
          {isMobile ? <TracksMobile /> : <Tracks />}
          <Sponsors />
          <Prizes />
          <Faq />
          <SlantedBanner sign='-' starsImageUrl={frameImage} />
          <Footer />
        </motion.div>
      </div>
    </LoaderScreen>
  );
};

export default CombinedPage;