import Section from './Section';
import CreatorCard from './CreatorCard';
import Button from './Button';

export default function RosterPreview() {
  const creators = [
    {
      name: 'Alex Chen',
      niche: 'Tech & Lifestyle',
      platforms: ['TikTok', 'Instagram'],
      engagementRate: '8.2%',
    },
    {
      name: 'Sarah Kim',
      niche: 'Fashion & Beauty',
      platforms: ['Instagram', 'YouTube'],
      engagementRate: '6.8%',
    },
    {
      name: 'Mike Rodriguez',
      niche: 'Fitness & Wellness',
      platforms: ['TikTok', 'YouTube'],
      engagementRate: '7.5%',
    },
    {
      name: 'Emma Thompson',
      niche: 'Food & Travel',
      platforms: ['Instagram', 'TikTok'],
      engagementRate: '9.1%',
    },
    {
      name: 'David Park',
      niche: 'Gaming & Tech',
      platforms: ['YouTube', 'Twitch'],
      engagementRate: '5.9%',
    },
    {
      name: 'Lisa Wang',
      niche: 'Parenting & Lifestyle',
      platforms: ['Instagram', 'TikTok'],
      engagementRate: '8.7%',
    },
  ];

  const rosterUrl = process.env.NEXT_PUBLIC_ROSTER_URL || 'https://airtable.com/placeholder';

  return (
    <Section id="roster" className="bg-light">
      <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-display-1 lg:text-display-2 font-display font-semibold text-dark mb-4 sm:mb-6 tracking-tight">
          Meet our creators
        </h2>
        <p className="text-base sm:text-xl md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-dm-sans font-normal leading-relaxed">
          Full media kits with engagement and audience insights available on request.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4 sm:px-0">
        {creators.map((creator, index) => (
          <CreatorCard key={index} {...creator} />
        ))}
      </div>
      
      <div className="text-center px-4 sm:px-0">
        <Button href={rosterUrl} size="lg" className="w-full sm:w-auto mx-auto text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 min-h-[48px]">
          Open Full Roster
        </Button>
        <p className="text-xs sm:text-sm text-gray-500 mt-4 font-inter font-medium">
          View detailed creator media kits, audience data, and past campaign results
        </p>
      </div>
    </Section>
  );
} 