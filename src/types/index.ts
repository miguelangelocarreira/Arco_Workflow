export interface User {
  uid: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  nif: string;
  address: string;
  zip: string;
  city: string;
  createdAt: number;
}

export interface ProjectItem {
  id: string;
  desc: string;
  qty: number;
  price: number;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  status: 'orçamento' | 'agendado' | 'work' | 'faturar' | 'pago' | 'arquivado' | 'lixo';
  items: ProjectItem[];
  discount: number;
  urgent: boolean;
  startDate: string;
  endDate: string | null;
  createdAt: number;
}

export interface ProjectStatus {
  id: string;
  label: string;
  color: string;
}

export interface ServiceSuggestion {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: Array<{
    desc: string;
    qty: number;
    price: number;
  }>;
}

export type ViewType = 'menu' | 'stats' | 'projects' | 'project-detail' | 'clients' | 'create-project' | 'search-results';