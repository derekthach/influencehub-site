import Button from './Button';

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-display-1 sm:text-display-2 font-display font-semibold mb-8 tracking-tight">
            Ready to meet your match?
          </h2>
          <p className="text-xl lg:text-2xl mb-10 opacity-90 font-dm-sans font-normal leading-relaxed">
            Start with our curated roster or tell us about your campaign goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="#roster" variant="secondary" size="lg" className="text-lg px-12 py-5">
              View the Roster
            </Button>
            <Button href="/contact" variant="ghost" size="lg" className="text-lg px-12 py-5 text-white border-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 