'use client';

import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Featured from '@/app/components/Featured';
import Hero from '@/app/components/Hero';
import Testemonial from '@/app/components/Testemonial';
import FeaturedMainCarsSection from '@/app/components/FeaturedMain';
import { useEffect, useState } from 'react';
import ContactNoText from '@/app/components/ContactNoText';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup listener on unmount
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return isMobile;
};

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main>
      {isMobile ? (
        <>
          <FeaturedMainCarsSection />
          <Contact />
          <Hero />
          <About />
          <Testemonial />
          <ContactNoText />
        </>
      ) : (
        <>
          <Hero />
          <Featured />
          <Contact />
          <About />
          <Testemonial />
          <ContactNoText />
        </>
      )}
    </main>
  );
}
