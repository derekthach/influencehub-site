import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                How we protect and handle your information.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  This is a placeholder privacy policy. Please replace with your actual privacy policy content.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4">Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you fill out our contact form or communicate with us.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to provide our services, communicate with you, and improve our offerings.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4">Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:hello@influencehub.net" className="text-primary hover:text-primary/80">
                    hello@influencehub.net
                  </a>
                </p>
                
                <hr className="my-8 border-gray-200" />
                
                <p className="mt-6 text-xs text-neutral-500">
                  Business Owner: Derek Thach (Sole Proprietor)<br />
                  Contact: hello@influencehub.net
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 