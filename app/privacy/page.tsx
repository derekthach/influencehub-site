import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Privacy() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-light">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-dark mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">
                Effective Date: January 10, 2026
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-6">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information that you provide directly to us when using InfluenceHub:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>Account information:</strong> Email address, name (if provided), and authentication credentials</li>
                  <li><strong>Profile information:</strong> Creator statistics, social media links, audience demographics, media kit details, and any content you upload to your profile</li>
                  <li><strong>Usage data:</strong> Basic analytics and events related to how you interact with the service</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">2. How We Use Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide and improve the InfluenceHub service</li>
                  <li>Authenticate your account and provide customer support</li>
                  <li>Send service-related communications (account updates, security notices, etc.)</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">3. Sharing and Third Parties</h2>
                <p className="text-gray-600 mb-4">
                  We may share your information with third-party service providers who help us operate our service:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>Firebase/Google services:</strong> We use Firebase for authentication, Firestore for data storage, and Google Cloud Storage for file storage</li>
                  <li><strong>Hosting provider:</strong> Our service is hosted on Vercel and other cloud infrastructure providers</li>
                  <li><strong>Analytics:</strong> We may use analytics tools to understand how users interact with our service</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  We do not sell your personal information to third parties.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">4. Data Retention</h2>
                <p className="text-gray-600 mb-6">
                  We retain your information for as long as your account is active or as needed to provide our services. If you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">5. Your Choices & Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the following rights regarding your information:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li><strong>Access and update:</strong> You can access and update your profile information at any time through your account settings</li>
                  <li><strong>Deletion:</strong> You can request deletion of your account and associated data by contacting us at hello@influencehub.net</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">6. Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:hello@influencehub.net" className="text-primary hover:text-primary/80 underline">
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