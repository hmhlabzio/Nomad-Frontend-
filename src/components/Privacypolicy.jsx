import React from 'react';
import Sparkheader from '../components/SparkHeader';


function PrivacyPolicy() {
  return (
    <>
    <Sparkheader />
    <div className="min-h-screen bg-gradient-to-br from-[#f3f4f6] via-[#e5e7eb] to-[#f9fafb] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-md  rounded-2xl p-10 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last Updated: July 8, 2025</p>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to NomadNetwork ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it. This policy applies to all information collected through our website (nomad-sooty.vercel.app) and any related services, sales, marketing, or events.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Information We Collect</h2>
          <p className="text-gray-700 mb-2">
            <strong>Personal Information You Disclose to Us:</strong> We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website (such as posting in the community forums), or otherwise contact us.
          </p>
          <p className="text-gray-700 mb-2">
            The personal information we collect may include your name, email address, payment information, and other information you choose to provide.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Information Automatically Collected:</strong> We automatically collect certain information when you visit, use, or navigate the website. This may include your IP address, browser type, operating system, language preferences, device name, country, location, and usage data.
          </p>
          <p className="text-gray-700">
            <strong>Information from Other Sources:</strong> We may obtain information about you from other sources, such as public databases, marketing partners, and data providers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To post testimonials (with your consent).</li>
            <li>To manage user accounts.</li>
            <li>To send administrative information.</li>
            <li>To protect our services (e.g., fraud prevention).</li>
            <li>To respond to inquiries and support requests.</li>
            <li>For data analysis, to improve our website, services, and marketing efforts.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Will Your Information Be Shared With Anyone?</h2>
          <p className="text-gray-700">
            We only share information with your consent, to comply with laws, to provide services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. How Long Do We Keep Your Information?</h2>
          <p className="text-gray-700">
            We keep your personal information only as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Your Privacy Rights</h2>
          <p className="text-gray-700">
            Depending on your country, you may have the right to access, update, or delete your personal data. To do so, please email us at <a href="mailto:privacy@nomadnetwork.com" className="text-blue-500 underline">privacy@nomadnetwork.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions or concerns, please contact us at:
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Email:</strong> <a href="mailto:privacy@nomadnetwork.com" className="text-blue-500 underline">privacy@nomadnetwork.com</a><br />
            <strong>Address:</strong> 123 Nomad Lane, Digital City, World 78901
          </p>
        </section>
      </div>
    </div>
    </>
    
  );
}

export default PrivacyPolicy;