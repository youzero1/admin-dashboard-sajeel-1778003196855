export type StatCardData = {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
  color: 'accent' | 'green' | 'blue' | 'purple' | 'yellow' | 'red';
};

export type ChartDataPoint = {
  label: string;
  value: number;
  secondary?: number;
};

export type TableUser = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joined: string;
  avatar: string;
};

export type ActivityItem = {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  type: 'create' | 'update' | 'delete' | 'login';
};

export type NavItem = {
  label: string;
  path: string;
  icon: string;
};
