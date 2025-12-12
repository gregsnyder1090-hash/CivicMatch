import { PAC, FilteredPACs } from './types';
import pacsData from '@/data/pacs.json';

export function getAllPACs(): PAC[] {
  return pacsData as PAC[];
}

export function filterPACsByStateAndIssues(
  state: string | null,
  issueKeys: string[]
): PAC[] {
  const allPACs = getAllPACs();
  
  return allPACs.filter((pac) => {
    // Must match one of the selected issues
    if (!issueKeys.includes(pac.issue_key)) {
      return false;
    }

    // If no state selected or "Prefer not to say", only show national PACs
    if (!state || state === 'prefer_not_to_say') {
      return pac.level === 'national';
    }

    // Show local PACs for the selected state
    if (pac.level === 'local' && pac.states.includes(state)) {
      return true;
    }

    // Show national PACs
    if (pac.level === 'national') {
      return true;
    }

    return false;
  });
}

export function groupPACsByIssue(pacs: PAC[]): Record<string, FilteredPACs> {
  const grouped: Record<string, FilteredPACs> = {};

  pacs.forEach((pac) => {
    if (!grouped[pac.issue_key]) {
      grouped[pac.issue_key] = {
        local: [],
        national: [],
      };
    }

    if (pac.level === 'local') {
      grouped[pac.issue_key].local.push(pac);
    } else {
      grouped[pac.issue_key].national.push(pac);
    }
  });

  return grouped;
}

export function getIssueLabel(issueKey: string): string {
  const pac = getAllPACs().find((p) => p.issue_key === issueKey);
  return pac?.issue_label || issueKey;
}

