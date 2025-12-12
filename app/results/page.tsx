'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState, Suspense } from 'react';
import { filterPACsByStateAndIssues, groupPACsByIssue, getIssueLabel } from '@/lib/utils';
import { PAC, FilteredPACs } from '@/lib/types';
import { US_STATES } from '@/config/constants';
import PACCard from '@/components/PACCard';

function ResultsContent() {
  const searchParams = useSearchParams();
  const [groupedPACs, setGroupedPACs] = useState<Record<string, FilteredPACs>>({});
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);

  useEffect(() => {
    const state = searchParams.get('state');
    const issuesParam = searchParams.get('issues');
    
    setSelectedState(state);
    
    if (issuesParam) {
      const issues = issuesParam.split(',').filter(Boolean);
      setSelectedIssues(issues);
      
      const filteredPACs = filterPACsByStateAndIssues(state, issues);
      const grouped = groupPACsByIssue(filteredPACs);
      setGroupedPACs(grouped);
    }
  }, [searchParams]);

  const getStateLabel = (stateCode: string | null): string => {
    if (!stateCode || stateCode === 'prefer_not_to_say') {
      return 'National results';
    }
    const state = US_STATES.find((s) => s.value === stateCode);
    return state ? `Results for ${state.label}` : 'National results';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        {getStateLabel(selectedState)}
      </h1>

      {selectedIssues.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-700">No issues selected. Please go back and select at least one issue.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {selectedIssues.map((issueKey) => {
            const issuePACs = groupedPACs[issueKey];
            if (!issuePACs || (issuePACs.local.length === 0 && issuePACs.national.length === 0)) {
              return null;
            }

            return (
              <section key={issueKey} className="space-y-6">
                <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-red-600 pb-2">
                  {getIssueLabel(issueKey)}
                </h2>

                {issuePACs.local.length > 0 ? (
                  <div>
                    <h3 className="text-lg font-medium text-red-600 mb-4">Local PACs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {issuePACs.local.map((pac) => (
                        <PACCard key={`${pac.name}-${pac.issue_key}`} pac={pac} />
                      ))}
                    </div>
                  </div>
                ) : selectedState && selectedState !== 'prefer_not_to_say' ? (
                  <div className="bg-blue-50 border-2 border-blue-300 rounded-md p-4 mb-6">
                    <p className="text-blue-800">
                      No local matches yet—here are national options.
                    </p>
                  </div>
                ) : null}

                {issuePACs.national.length > 0 && (
                  <div>
                    {issuePACs.local.length > 0 && (
                      <h3 className="text-lg font-medium text-blue-600 mb-4">National PACs</h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {issuePACs.national.map((pac) => (
                        <PACCard key={`${pac.name}-${pac.issue_key}`} pac={pac} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      <div className="mt-16 pt-8 border-t-2 border-blue-600">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium text-blue-600">Was this helpful?</p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/feedback"
              className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition-colors border-2 border-blue-300"
            >
              👍 Yes
            </Link>
            <Link
              href="/feedback"
              className="inline-flex items-center px-6 py-3 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors border-2 border-red-300"
            >
              👎 No
            </Link>
          </div>
          <div className="pt-4">
            <Link
              href="/feedback"
              className="text-blue-600 hover:text-red-600 underline font-medium"
            >
              Give feedback / suggest a PAC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12">
          <p className="text-blue-600">Loading results...</p>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}

