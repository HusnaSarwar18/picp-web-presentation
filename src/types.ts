export interface City {
  name: string;
  isPPPFocus?: boolean;
  relevance?: string;
}

export interface DLI {
  id: number;
  title: string;
  description: string;
  evidence: string[];
  fieldValidation: boolean;
  output: string;
  roles: string[];
}

export interface Step {
  title: string;
  description: string;
  details?: string[];
}

export interface TeamMember {
  role: string;
  category: 'Key' | 'Non-Key';
  count?: number;
  personMonths?: number;
  description: string;
  responsibilities?: string[];
}

export interface Instrument {
  title: string;
  icon: string;
}

export interface Output {
  title: string;
  description: string;
  timeline?: string;
  hardCopy?: boolean;
  softCopy?: boolean;
}

export interface TorComplianceItem {
  torRequirement: string;
  implementation: string;
}
