export interface PAC {
  issue_key: string;
  issue_label: string;
  name: string;
  website: string;
  description: string;
  level: 'local' | 'national';
  states: string[];
}

export interface Issue {
  key: string;
  label: string;
}

export interface FilteredPACs {
  local: PAC[];
  national: PAC[];
}

