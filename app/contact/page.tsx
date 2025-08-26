import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Contact() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-light">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark mb-4">Get in touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your goals. We'll reply within 24–48 hours.
            </p>
          </div>
          
          {/* Three Horizontal Sections */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Section 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us a direct message and we'll get back to you quickly.</p>
              <a href="mailto:hello@influencehub.net" className="text-primary hover:text-primary/80 font-medium">
                hello@influencehub.net
              </a>
            </div>

            {/* Section 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Response Time</h3>
              <p className="text-gray-600 mb-4">We typically respond to all inquiries within 24-48 hours.</p>
              <span className="text-primary font-medium">24-48 hours</span>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Expert Support</h3>
              <p className="text-gray-600 mb-4">Get personalized guidance from our creator marketing experts.</p>
              <span className="text-primary font-medium">Expert guidance</span>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-dark mb-6 text-center">Send us a message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-dark mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="1k-5k">$1K - $5K</option>
                    <option value="5k-10k">$5K - $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your campaign goals, target audience, and what you're looking to achieve..."
                  ></textarea>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 