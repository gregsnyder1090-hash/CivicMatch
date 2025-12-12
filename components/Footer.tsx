import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-600 border-t-4 border-red-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <Link
            href="/feedback"
            className="text-white hover:text-red-200 underline font-medium"
          >
            Give feedback / suggest a PAC
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-white">
          <p>CivicMatch helps you find PACs that align with your values.</p>
          <p className="mt-1">We do not process donations.</p>
        </div>
      </div>
    </footer>
  );
}

