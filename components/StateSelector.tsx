'use client';

import { US_STATES } from '@/config/constants';

interface StateSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function StateSelector({ value, onChange }: StateSelectorProps) {
  return (
    <div>
      <label htmlFor="state" className="block text-sm font-medium text-blue-600 mb-2">
        State (optional)
      </label>
      <select
        id="state"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border-2 border-blue-200 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 hover:border-red-300 transition-colors"
      >
        <option value="">Prefer not to say</option>
        {US_STATES.map((state) => (
          <option key={state.value} value={state.value}>
            {state.label}
          </option>
        ))}
      </select>
    </div>
  );
}

