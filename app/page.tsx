import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Logo showText={true} size="lg" className="justify-center" />
        </div>
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to CivicMatch
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          CivicMatch helps you discover political action committees (PACs) that align with your values. 
          Select your location and the issues that matter to you, and we&apos;ll show you relevant PACs 
          where you can make a direct impact.
        </p>
        <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
          This app is informational only—we do not process donations. You&apos;ll be directed to each PAC&apos;s 
          website to donate directly.
        </p>
        <Link
          href="/quiz"
          className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg"
        >
          Find your causes
        </Link>
      </div>
    </div>
  );
}

