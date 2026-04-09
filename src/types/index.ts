export interface User {
  uid: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  active: boolean;
  createdAt: number;
  lastLoginAt: number;
}

export interface CompanySettings {
  name: string;
  nif: string;
  address: string;
  zip: string;
  city: string;
  phone: string;
  email: string;
}

export interface PipelineStatus {
  id: string;
  label: string;
  color: string;
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

// ── Quote types ───────────────────────────────────────────────────────────────

export type QuoteMode = 'servico' | 'avenca';
export type QuoteStatus = 'rascunho' | 'enviado' | 'aprovado' | 'recusado' | 'fatura';

export interface QuoteSettings {
  prices: {
    fotografia_produto: number;
    fotografia_corporativa: number;
    video_institucional: number;
    reels_social: number;
    campanha_completa: number;
  };
  multipliers: {
    digital_organico: number;
    campanha_paga: number;
  };
  urgency: {
    short: number;
    extreme: number;
  };
  travel: {
    perKm: number;
    fixedFee: number;
  };
  revisionCost: number;
  labels?: {
    fotografia_produto?: string;
    fotografia_corporativa?: string;
    video_institucional?: string;
    reels_social?: string;
    campanha_completa?: string;
  };
  updatedAt?: number;
}

export interface QuoteBreakdownItem {
  label: string;
  val: number | string;
}

export interface Quote {
  id: string;
  clientId: string;
  mode: QuoteMode;
  status: QuoteStatus;
  // Serviço fields
  servico: string;
  quantidade: number;
  uso: string;
  urgencia: number;
  deslocacao: boolean;
  deslocacaoKm: number;
  revisoes: number;
  desconto: number;
  // Avença fields
  duracao: number;
  precoAvenca: number;
  avencaItens: Record<string, number>;
  // Personalizado
  servicoCustomLabel?: string;
  servicoCustomUnit?: string;
  servicoCustomPrice?: number;
  // Common
  notas: string;
  total: number;
  breakdown: QuoteBreakdownItem[];
  settingsSnapshot: QuoteSettings;
  createdAt: number;
  updatedAt: number;
  createdBy: string;
  createdByName: string;
}

// ── View routing ──────────────────────────────────────────────────────────────

export type ViewType =
  | 'menu'
  | 'stats'
  | 'projects'
  | 'project-detail'
  | 'clients'
  | 'client-detail'
  | 'create-project'
  | 'search-results'
  | 'settings'
  | 'new-quote'
  | 'quote-detail';

export type ActivityAction =
  | 'created_project'
  | 'deleted_project'
  | 'changed_status'
  | 'added_item'
  | 'removed_item'
  | 'created_client';

export interface ActivityLog {
  id: string;
  userId: string;
  userName: string;
  action: ActivityAction;
  entityType: 'project' | 'client';
  entityId: string;
  entityName: string;
  details?: string;
  timestamp: number;
}
