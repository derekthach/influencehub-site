import Button from './Button';

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-primary text-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-display-1 lg:text-display-2 font-display font-semibold mb-6 sm:mb-8 tracking-tight px-2">
            Ready to meet your match?
          </h2>
          <p className="text-base sm:text-xl md:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 font-dm-sans font-normal leading-relaxed px-4">
            Start with our curated roster or tell us about your campaign goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
            <Button href="#roster" variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 min-h-[48px]">
              View the Roster
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 text-white border-white hover:bg-white hover:text-primary min-h-[48px]">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 