import React from 'react';
import SparkHeader from '../components/SparkHeader';
import bg from '../assets/support.jpg';

function SupportPage() {
  return (
    <>
      {/* Hero Section with Header on Top of Background */}
     <div
        className="relative w-full h-[90vh] flex items-center justify-center px-6 sm:px-12 py-20 pt-28 sm:pt-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Header Overlay */}
        <div className="absolute top-0 left-0 w-full z-30">
          <SparkHeader />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center max-w-3xl mt-10">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            We’re Here to Help.
          </h1>
          <p className="text-lg mt-4 text-white font-medium">
            Have a question about using NomadNetwork? Encountering a technical issue? Our support team is here to ensure your experience is smooth and seamless.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white text-gray-800 font-[Poppins]">

        {/* FAQ Section */}
        <section className="py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-8 max-w-5xl mx-auto">
            {[
              {
                question: 'How is the Nomad Lifestyle Score calculated?',
                answer:
                  'Our score is a proprietary algorithm that aggregates data from dozens of public sources (e.g., cost of living indices, internet speed tests) and combines it with thousands of user-submitted ratings and reviews from our community. This hybrid approach ensures our scores are both objective and reflect real-world experiences.',
              },
              {
                question: 'How can I contribute to the data on the site?',
                answer:
                  'Once you become a member, you can submit reviews and ratings for any city you’ve lived and worked in. Look for the "Add Your Rating" button on any city page. Your contributions directly influence the scores.',
              },
              {
                question: 'Is my personal information safe?',
                answer:
                  'Absolutely. We take your privacy seriously. For a detailed breakdown of how we protect your data, please read our full Privacy Policy.',
              },
              {
                question: 'How do I delete my account?',
                answer:
                  'We’d be sad to see you go, but you can delete your account at any time from your user profile settings. Please note that this action is irreversible.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Contact Us</h2>

          <div className="max-w-6xl mx-auto text-gray-800">
  <div className="grid gap-12 md:grid-cols-4">
    {[
      {
        title: 'For General Inquiries & Feedback',
        email: 'info@nomadnetwork.com',
      },
      {
        title: 'For Technical Support',
        email: 'support@nomadnetwork.com',
      },
      {
        title: 'For Partnership & Media Inquiries',
        email: 'partnerships@nomadnetwork.com',
      },
    ].map((contact, index) => (
      <div key={index}>
        <h3 className="text-lg font-semibold text-blue-800 mb-1">{contact.title}</h3>
        <p>
          Email us at:{' '}
          <a
            href={`mailto:${contact.email}`}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {contact.email}
          </a>
        </p>
      </div>
    ))}

    {/* Business Address Block with Vertical Line */}
    <div className="md:pl-6 border-gray-300">
      <h3 className="text-lg font-semibold text-blue-800 mb-1">Business Address:</h3>
      <p>
        NomadNetwork <br />
        123 Nomad Lane, Digital City, World 78901 <br />
        +1 (555) 123-4567
      </p>
    </div>
  </div>

  <p className="text-sm text-gray-500 mt-6 text-center">
    We aim to respond to all inquiries within 24–48 business hours.
  </p>
</div>


        </section>
      </div>
    </>
  );
}

export default SupportPage;
