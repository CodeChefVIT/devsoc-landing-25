'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement }>(
    {
      home: null as unknown as HTMLDivElement,
     about: null as unknown as HTMLDivElement,
      gallery: null as unknown as HTMLDivElement,
      timeline: null as unknown as HTMLDivElement,
      tracks: null as unknown as HTMLDivElement,
      sponsors: null as unknown as HTMLDivElement,
      prizes: null as unknown as HTMLDivElement,
     faq: null as unknown as HTMLDivElement,
    } as  Record<string, HTMLDivElement>
  );

  // Calculate which section is currently in view and its progress
  const [currentBackground, setCurrentBackground] = useState("#1B4965");
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = {
                home: { color: "#24637B", ref: sectionRefs.current.home },
                about: { color: "#A85059", ref: sectionRefs.current.about },
                gallery: { color: "#FFE6D4", ref: sectionRefs.current.gallery },
                timeline: { color: "#F6F5F5", ref: sectionRefs.current.timeline },
                tracks: { color: "#48634A", ref: sectionRefs.current.tracks },
                sponsors: { color: "#60A2BB", ref: sectionRefs.current.sponsors },
                prizes: { color: "#FFE6D4", ref: sectionRefs.current.prizes },
                faq: { color: "#125A76", ref: sectionRefs.current.faq },
            };

             let maxVisibleSection = { id: "home", visibility: 0 };

            Object.entries(sections).forEach(([id, { ref }]) => {
                if (!ref) return;

                const rect = ref.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

             // Calculate how much of the section is in the viewport
               const visibleHeight = Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top);
              const visibility = visibleHeight / viewportHeight;

                if (visibility > maxVisibleSection.visibility) {
                    maxVisibleSection = { id, visibility };
                }
            });

           // Set the background color based on the most visible section
             setCurrentBackground(sections[maxVisibleSection.id as keyof typeof sections].color);

            // Check timeline completion
            if (postTimelineRef.current) {
                const rect = postTimelineRef.current.getBoundingClientRect();
                const isInView = rect.top <= window.innerHeight;
                if (isInView !== timelineComplete) {
                    setTimelineComplete(isInView);
                }
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
          style={{ 
            backgroundColor: currentBackground,
            transition: 'background-color 0.5s ease-out'
          }}
        >
          <div ref={el => { if(el) sectionRefs.current.home = el}}>
            <HomePage backgroundImage={bgHomeImage} mascotPeekImage={peekImage} />
          </div>
          <SlantedBanner sign='+' starsImageUrl={frameImage} />
          <div ref={el => { if(el) sectionRefs.current.about = el}}>
            <About />
          </div>
           <div ref={el => { if(el) sectionRefs.current.gallery = el}}>
            <Gallery />
          </div>
        </motion.div>

        <div ref={el => { if(el) sectionRefs.current.timeline = el}} className="relative">
          {isMobile ? <Timeline /> : <AnimatedTimeline />}
        </div>

        <motion.div
          ref={postTimelineRef}
          style={{
            backgroundColor: currentBackground,
            transition: 'background-color 0.5s ease-out',
            marginTop: isMobile ? '0' : '-100vh'
          }}
        >
            <div ref={el => { if(el) sectionRefs.current.tracks = el}}>
                {isMobile ? <TracksMobile /> : <Tracks />}
            </div>
          <div ref={el => { if(el) sectionRefs.current.sponsors = el}}>
            <Sponsors />
            </div>
            <div ref={el => { if(el) sectionRefs.current.prizes = el}}>
              <Prizes />
             </div>
          <div ref={el => { if(el) sectionRefs.current.faq = el}}>
             <Faq />
           </div>
          <SlantedBanner sign='-' starsImageUrl={frameImage} />
          <Footer />
        </motion.div>
      </div>
    </LoaderScreen>
  );
};

export default CombinedPage;