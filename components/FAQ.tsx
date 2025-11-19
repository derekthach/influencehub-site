export default function FAQ() {
  return (
    <section className="section-padding bg-blue-100/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-dark mb-12 tracking-tight text-center">
            InfluenceHub FAQ
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-dark mb-4 tracking-tight">
                How does InfluenceHub work for brands?
              </h3>
              <p className="text-lg text-gray-600 font-dm-sans leading-relaxed">
                Brands create a free account, post a campaign with product details, budget, 
                and deliverables, then review applications from vetted influencers and UGC 
                creators. Brands manage submissions, revisions, and payments directly inside 
                InfluenceHub.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-dark mb-4 tracking-tight">
                How does InfluenceHub work for influencers?
              </h3>
              <p className="text-lg text-gray-600 font-dm-sans leading-relaxed">
                Influencers and UGC creators create a profile, link their social accounts, 
                and apply to campaigns that match their niche. They submit content, handle 
                revisions, and get paid once the brand approves their deliverables.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-dark mb-4 tracking-tight">
                Is InfluenceHub an agency?
              </h3>
              <p className="text-lg text-gray-600 font-dm-sans leading-relaxed">
                No. InfluenceHub is a self-serve platform that connects brands and creators 
                directly. There is no agency fee or long-term retainer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

