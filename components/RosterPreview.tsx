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
      <div className="text-center mb-20">
        <h2 className="text-display-1 sm:text-display-2 font-display font-semibold text-dark mb-6 tracking-tight">
          Meet our creators
        </h2>
        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-dm-sans font-normal leading-relaxed">
          Full profiles with engagement and audience insights available on request.
        </p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {creators.map((creator, index) => (
          <CreatorCard key={index} {...creator} />
        ))}
      </div>
      
      <div className="text-center">
        <Button href={rosterUrl} size="lg" className="mx-auto text-lg px-12 py-5">
          Open Full Roster
        </Button>
        <p className="text-sm text-gray-500 mt-4 font-inter font-medium">
          View detailed creator profiles, audience data, and past campaign results
        </p>
      </div>
    </Section>
  );
} 