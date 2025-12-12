import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo className="hover:opacity-80 transition-opacity" />
          <nav className="flex space-x-6">
            <Link
              href="/quiz"
              className="text-blue-600 hover:text-red-600 font-medium transition-colors"
            >
              Find Causes
            </Link>
            <Link
              href="/about"
              className="text-blue-600 hover:text-red-600 font-medium transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

