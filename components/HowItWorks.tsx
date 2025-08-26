import Section from './Section';

export default function HowItWorks() {
  const steps = [
    {
      icon: '📋',
      title: 'Share goals',
      description: 'Brief us on your audience, budget, and campaign objectives.',
    },
    {
      icon: '🎯',
      title: 'Curated matches',
      description: 'Get a short list of creators that fit your brand and goals.',
    },
    {
      icon: '🚀',
      title: 'Run the campaign',
      description: 'We handle content creation, tracking, and wrap-up reporting.',
    },
  ];

  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center mb-20">
        <h2 className="text-display-1 sm:text-display-2 font-display font-semibold text-dark mb-6 tracking-tight">
          How it works
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-dm-sans font-normal leading-relaxed">
          Simple, transparent, and results-focused creator partnerships.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="text-center p-8 rounded-2xl bg-light border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="text-5xl mb-6">{step.icon}</div>
            <h3 className="text-2xl font-display font-semibold text-dark mb-4 tracking-tight">{step.title}</h3>
            <p className="text-gray-600 font-dm-sans leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
} 