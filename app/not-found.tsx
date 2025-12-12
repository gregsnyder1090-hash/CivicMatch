import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-700 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/quiz"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors"
          >
            Find Causes
          </Link>
        </div>
      </div>
    </div>
  );
}

