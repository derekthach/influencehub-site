interface CreatorCardProps {
  name: string;
  niche: string;
  platforms: string[];
  engagementRate: string;
  imageUrl?: string;
}

export default function CreatorCard({ name, niche, platforms, engagementRate, imageUrl }: CreatorCardProps) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 w-full">
      {/* Creator Image */}
      <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-lg sm:rounded-xl mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-lg sm:rounded-xl" />
        ) : (
          <div className="text-gray-400 text-xs sm:text-sm">Creator Photo</div>
        )}
      </div>
      
      {/* Creator Info */}
      <h3 className="font-semibold text-dark text-base sm:text-lg mb-2">{name}</h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-3">{niche}</p>
      
      {/* Platform Pills */}
      <div className="flex flex-wrap gap-2 mb-3">
        {platforms.map((platform) => (
          <span
            key={platform}
            className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
          >
            {platform}
          </span>
        ))}
      </div>
      
      {/* Engagement Rate */}
      <div className="flex items-center justify-between">
        <span className="text-xs sm:text-sm text-gray-500">Typical ER</span>
        <span className="font-semibold text-accent text-sm sm:text-base">{engagementRate}</span>
      </div>
    </div>
  );
} 