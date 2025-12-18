'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhatIsInfluenceHub from '../components/WhatIsInfluenceHub';
import TrustBar from '../components/TrustBar';
import HowItWorks from '../components/HowItWorks';
import RosterPreview from '../components/RosterPreview';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { pageview } from '../lib/analytics/ga';

export default function Home() {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIsInfluenceHub />
      <TrustBar />
      <HowItWorks />
      <RosterPreview />
      <WhyUs />
      <Testimonial />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}  
