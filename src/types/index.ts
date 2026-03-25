export interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface RevenueModel {
  title: string;
  income: string;
  description: string;
  icon?: string;
}
