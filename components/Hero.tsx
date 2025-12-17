import Button from './Button';

export default function Hero() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-hero lg:text-hero-lg xl:text-hero-xl font-display font-bold text-dark mb-6 sm:mb-8 leading-none tracking-tighter px-2">
            Your Professional Influencer Profile — Ready for{' '}
            <span className="text-primary relative">
              Brands
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto font-dm-sans font-normal leading-relaxed px-4">
            Turn your content, stats, and past collaborations into a clean, public influencer profile you can share with{' '}
            <span className="font-semibold text-dark">any brand</span>
            {' — without hacking together Canva decks or Google Docs.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0">
            <Button href="#roster" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 min-h-[48px]">
              View the Roster →
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 min-h-[48px]">
              Talk to us
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-500 font-inter font-medium px-4">
            No fees to browse. Curated matches only.
          </p>
        </div>
      </div>
    </section>
  );
} 