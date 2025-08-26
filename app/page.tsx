import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import HowItWorks from '../components/HowItWorks';
import RosterPreview from '../components/RosterPreview';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <RosterPreview />
      <WhyUs />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
} 