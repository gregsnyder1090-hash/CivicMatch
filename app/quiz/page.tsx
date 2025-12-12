'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import StateSelector from '@/components/StateSelector';
import IssueSelector from '@/components/IssueSelector';

export default function QuizPage() {
  const [state, setState] = useState('');
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedIssues.length === 0) {
      alert('Please select at least one issue.');
      return;
    }

    const queryParams = new URLSearchParams();
    if (state && state !== '') {
      queryParams.set('state', state);
    }
    queryParams.set('issues', selectedIssues.join(','));

    router.push(`/results?${queryParams.toString()}`);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Find Your Causes</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <StateSelector value={state} onChange={setState} />
        
        <IssueSelector selectedIssues={selectedIssues} onChange={setSelectedIssues} />
        
        <div className="pt-4">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors shadow-lg"
          >
            Find PACs
          </button>
        </div>
      </form>
    </div>
  );
}

