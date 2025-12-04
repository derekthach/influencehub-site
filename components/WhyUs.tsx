import Section from './Section';

export default function WhyUs() {
  const benefits = [
    {
      title: 'Vetted creators',
      description: 'Real engagement, brand-safe partnerships, no fake followers.',
    },
    {
      title: 'Hands-on support',
      description: 'From brief to wrap-up, we manage campaigns end-to-end.',
    },
    {
      title: 'Local-first wins',
      description: 'Prove ROI with smaller campaigns before scaling up.',
    },
  ];

  return (
    <Section id="why-us" className="bg-white">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-display-1 lg:text-display-2 font-display font-semibold text-dark mb-4 sm:mb-6 tracking-tight">
          Why choose InfluenceHub?
        </h2>
        <p className="text-base sm:text-xl md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-dm-sans font-normal leading-relaxed">
          Unlike self-serve marketplaces, InfluenceHub hand-selects creators, manages campaigns end-to-end, and reports on outcomes. We focus on brand safety, authentic fit, and measurable results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-4 sm:px-0">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-dark mb-3 sm:mb-4 tracking-tight">{benefit.title}</h3>
            <p className="text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
} 