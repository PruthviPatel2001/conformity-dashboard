// Compliance rule structure
export interface ComplianceRule {
  name: string;
  percentage: number;
  status: string;
  lastUpdate: string;
}

// Action item structure
export interface ActionItem {
  id: number;
  title: string;
}

// Risk Level structure
export interface RiskLevelDistribution {
  high: number;
  medium: number;
  low: number;
}

// Compliance Trends structure
export interface ComplianceTrend {
  date: string;
  compliancePercentage: number;
}

// Controls by Compliance structure
export interface ControlCompliance {
  complianceFramework: string;
  numberOfControls: number;
}

// API Response structure
export interface ComplianceResponse {
  complianceRuleOverview: ComplianceRule[];
  actionItems: { items: string[] };
  riskLevelDistribution: {
    riskLevels: RiskLevelDistribution;
    trendsInCompliance: ComplianceTrend[];
    controlsByCompliance: ControlCompliance[];
  };
}

// Metric structure
export interface ComplianceMetric {
  title: string;
  value: string;
  icon: JSX.Element;
  bgColor: string;
}
