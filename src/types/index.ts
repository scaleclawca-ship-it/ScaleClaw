export interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  whopLink?: string; // Add this for Whop integration
}

export interface RevenueModel {
  title: string;
  income: string;
  description: string;
  icon?: string;
}
