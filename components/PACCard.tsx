import { PAC } from '@/lib/types';

interface PACCardProps {
  pac: PAC;
}

export default function PACCard({ pac }: PACCardProps) {
  return (
    <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-lg hover:border-red-400 transition-all">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{pac.name}</h3>
      <p className="text-gray-700 mb-4">{pac.description}</p>
      <a
        href={pac.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
      >
        Visit website
      </a>
    </div>
  );
}

