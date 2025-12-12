import Link from 'next/link';

export default function AboutPage() {

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">About <span className="text-red-600">Civic</span><span className="text-blue-600">Match</span></h1>
      
      <div className="prose prose-lg max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Purpose</h2>
          <p className="text-gray-700">
            CivicMatch is a tool designed to help you discover political action committees (PACs) 
            that align with your values and the issues you care about. We make it easy to find 
            both local and national PACs working on causes that matter to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">How It Works</h2>
          <p className="text-gray-700">
            Simply select your state (optional) and the issues that are important to you. 
            We&apos;ll show you relevant PACs, prioritizing local organizations when available, 
            followed by national options. Each PAC card includes a direct link to their website 
            where you can learn more and make donations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Important Disclaimer</h2>
          <div className="bg-blue-50 border-l-4 border-red-600 p-4 mb-4">
            <p className="text-gray-800 font-medium">
              CivicMatch does not process donations or handle any financial transactions.
            </p>
            <p className="text-gray-700 mt-2">
              We are an informational platform only. All donations are made directly through 
              each PAC&apos;s website. We are not affiliated with any of the organizations listed, 
              and we do not receive any compensation for donations made through our links.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Feedback</h2>
          <p className="text-gray-700 mb-4">
            We&apos;re always looking to improve CivicMatch and expand our database of PACs. 
            If you have feedback, suggestions, or know of a PAC that should be included, 
            please let us know!
          </p>
          <Link
            href="/feedback"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors shadow-lg"
          >
            Give feedback / suggest a PAC
          </Link>
        </section>

        <section className="pt-8">
          <Link
            href="/quiz"
            className="text-blue-600 hover:text-red-600 underline font-medium"
          >
            ← Back to Find Your Causes
          </Link>
        </section>
      </div>
    </div>
  );
}

