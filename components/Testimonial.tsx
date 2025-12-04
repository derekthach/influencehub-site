export default function Testimonial() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-light">
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-xl">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8">💬</div>
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-medium text-dark mb-6 sm:mb-8 leading-tight tracking-tight px-2">
              "InfluenceHub made sourcing creators effortless and results measurable from day one."
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-base sm:text-lg font-bold">JD</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-display font-semibold text-dark text-base sm:text-lg">Jane Doe</div>
                <div className="text-sm sm:text-base text-gray-500 font-dm-sans">Marketing Director, Jewelry Brand</div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 text-xs text-gray-400 font-inter font-medium">Verified collaboration</div>
          </div>
        </div>
      </div>
    </section>
  );
} 