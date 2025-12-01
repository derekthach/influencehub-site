export default function Testimonial() {
  return (
    <section className="py-24 bg-light">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl">
            <div className="text-6xl mb-8">💬</div>
            <blockquote className="text-3xl md:text-4xl font-display font-medium text-dark mb-8 leading-tight tracking-tight">
              "Influix made sourcing creators effortless and results measurable from day one."
            </blockquote>
            <div class="flex items-center justify-center space-x-4">
              <div class="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <span class="text-primary text-lg font-bold">JD</span>
              </div>
              <div class="text-left">
                <div class="font-display font-semibold text-dark text-lg">Jane Doe</div>
                <div class="text-gray-500 font-dm-sans">Marketing Director, Jewelry Brand</div>
              </div>
            </div>
            <div class="mt-6 text-xs text-gray-400 font-inter font-medium">Verified collaboration</div>
          </div>
        </div>
      </div>
    </section>
  );
} 