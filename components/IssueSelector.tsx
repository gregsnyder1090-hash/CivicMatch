'use client';

import { ISSUES } from '@/config/constants';

interface IssueSelectorProps {
  selectedIssues: string[];
  onChange: (issues: string[]) => void;
}

export default function IssueSelector({ selectedIssues, onChange }: IssueSelectorProps) {
  const handleToggle = (issueKey: string) => {
    if (selectedIssues.includes(issueKey)) {
      onChange(selectedIssues.filter((key) => key !== issueKey));
    } else {
      onChange([...selectedIssues, issueKey]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-blue-600 mb-3">
        Select the issues important to you (select all that apply)
      </label>
      <div className="space-y-2">
        {ISSUES.map((issue) => (
          <label
            key={issue.key}
            className="flex items-center p-3 border-2 border-blue-200 rounded-md hover:bg-blue-50 hover:border-red-300 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={selectedIssues.includes(issue.key)}
              onChange={() => handleToggle(issue.key)}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded bg-white"
            />
            <span className="ml-3 text-gray-700">{issue.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

