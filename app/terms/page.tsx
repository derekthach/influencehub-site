import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Terms() {
  return (
    <main>
      <Navbar />
      
      <section className="section-padding bg-light">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-dark mb-4">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Effective Date: January 10, 2026
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-6">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing or using InfluenceHub, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">2. Eligibility</h2>
                <p className="text-gray-600 mb-6">
                  You must be at least 13 years old to use InfluenceHub. If you are under 18, you represent that you have your parent's or guardian's permission to use the service.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">3. Accounts and Security</h2>
                <p className="text-gray-600 mb-4">
                  When you create an account, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access to your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">4. User Content</h2>
                <p className="text-gray-600 mb-4">
                  You retain ownership of all content you upload or submit to your InfluenceHub profile. By uploading content, you grant us a license to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Display and distribute your content as part of your public profile</li>
                  <li>Use your content to provide and improve our services</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  You represent that you have the right to grant this license and that your content does not violate any third-party rights.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">5. Prohibited Uses</h2>
                <p className="text-gray-600 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Use the service for any illegal purpose or in violation of any laws</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to gain unauthorized access to the service or its systems</li>
                  <li>Scrape, crawl, or use automated tools to access the service without permission</li>
                  <li>Upload malicious code, viruses, or other harmful content</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">6. Termination</h2>
                <p className="text-gray-600 mb-6">
                  We may suspend or terminate your account at any time for violation of these terms or for any other reason we deem necessary. You may also delete your account at any time through your account settings.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">7. Disclaimers</h2>
                <p className="text-gray-600 mb-6">
                  InfluenceHub is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, secure, or error-free.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  To the maximum extent permitted by law, InfluenceHub and its operators shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">9. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page and updating the effective date. Your continued use of the service after such changes constitutes acceptance of the updated terms.
                </p>
                
                <h2 className="text-2xl font-semibold text-dark mb-4 mt-8">10. Contact</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us at{' '}
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

