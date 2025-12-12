import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', text: 'text-base' },
    md: { icon: 'w-10 h-10', text: 'text-lg' },
    lg: { icon: 'w-16 h-16', text: 'text-2xl' },
  };

  const currentSize = sizeClasses[size];

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* Magnifying Glass Icon with Heart */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`flex-shrink-0 ${currentSize.icon}`}
      >
        {/* Magnifying Glass Circle */}
        <circle
          cx="16"
          cy="16"
          r="9"
          stroke="#1e40af"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Red Heart inside the lens - centered */}
        <path
          d="M16 13.5C16 12.4 15.1 11.5 14 11.5C12.9 11.5 12 12.4 12 13.5C12 14.6 14 16.5 16 18.5C18 16.5 20 14.6 20 13.5C20 12.4 19.1 11.5 18 11.5C16.9 11.5 16 12.4 16 13.5Z"
          fill="#dc2626"
        />
        {/* Magnifying Glass Handle */}
        <line
          x1="23"
          y1="23"
          x2="28"
          y2="28"
          stroke="#1e40af"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      
      {/* Text */}
      {showText && (
        <div className={`flex flex-col ${currentSize.text}`}>
          <span className="font-bold text-blue-600 leading-tight">Civic</span>
          <span className="font-bold text-blue-600 leading-tight">Match</span>
        </div>
      )}
    </Link>
  );
}

