export default function TrustBar() {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-gray-500 mb-2">Built for marketing teams that value authenticity and brand safety</p>
          <p className="text-base sm:text-lg font-medium text-dark px-4">Boutique brands • Local businesses • DTC • Hospitality</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-40 px-4 sm:px-0">
          {/* Logo placeholders */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-20 sm:w-24 h-10 sm:h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-gray-400 text-xs font-medium">LOGO {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 