import Button from './Button';

export default function Hero() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-hero sm:text-hero-lg lg:text-hero-xl font-display font-bold text-dark mb-8 leading-none tracking-tighter">
            Connect your brand with{' '}
            <span className="text-primary relative">
              vetted creators
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-10 max-w-4xl mx-auto font-dm-sans font-normal leading-relaxed">
            A curated roster reaching <span className="font-semibold text-dark">700K+</span> across TikTok, Instagram, and YouTube.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Button href="#roster" size="lg" className="text-lg px-10 py-5">
              View the Roster →
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="text-lg px-10 py-5">
              Talk to us
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 font-inter font-medium">
            No fees to browse. Curated matches only.
          </p>
        </div>
      </div>
    </section>
  );
} 