// Hero Component - Creator-First Landing Page
// 
// CTA Route Changes:
// - Old primary CTA: "#roster" (internal anchor)
// - New primary CTA: "https://app.influencehub.net/signup" (external app signup)
// - Old secondary CTA: "/contact" (contact page)
// - New secondary CTA: "https://app.influencehub.net/islariv" (example profile)

import Button from './Button';

export default function Hero() {
  return (
    <section className="section-padding gradient-bg">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-hero lg:text-hero-lg xl:text-hero-xl font-display font-bold text-dark mb-6 sm:mb-8 leading-none tracking-tighter px-2">
            Your Creator Profile. Done Right.
          </h1>
          
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 sm:mb-10 max-w-4xl mx-auto font-dm-sans font-normal leading-relaxed px-4">
            Build a clean, professional creator profile that showcases your audience, content, and brand experience — all in one shareable link.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-10 w-full sm:w-auto px-4 sm:px-0">
            <Button href="https://app.influencehub.net/signup" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 min-h-[48px]">
              Create your profile →
            </Button>
            <Button href="https://app.influencehub.net/islariv" variant="secondary" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 min-h-[48px]">
              View example profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 