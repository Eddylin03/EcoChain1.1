export interface Alert {
  id: string;
  type: 'deforestation' | 'movement' | 'compliance';
  severity: 'low' | 'medium' | 'high';
  message: string;
  timestamp: string;
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

export interface CattleLocation {
  id: string;
  longitude: number;
  latitude: number;
  count: number;
}

export interface ComplianceStatus {
  total: number;
  compliant: number;
  pending: number;
  nonCompliant: number;
}