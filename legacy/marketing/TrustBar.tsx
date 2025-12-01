export default function TrustBar() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500 mb-2">Built for marketing teams that value authenticity and brand safety</p>
          <p className="text-lg font-medium text-dark">Boutique brands • Local businesses • DTC • Hospitality</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
          {/* Logo placeholders */}
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-xs font-medium">LOGO {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 