import { Camera, Video, Bot } from 'lucide-react';
import { ProjectStatus, ServiceSuggestion } from '../types';

export const PROJECT_STATUSES: ProjectStatus[] = [
  { id: "orçamento", label: "Orçamento", color: "bg-slate-100 text-slate-600 border-slate-200" },
  { id: "agendado", label: "Agendado", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: "work", label: "Em Curso", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { id: "faturar", label: "A Faturar", color: "bg-purple-50 text-purple-600 border-purple-200" },
  { id: "pago", label: "Pago", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: "arquivado", label: "Arquivado", color: "bg-gray-100 text-gray-400 border-gray-200" },
  { id: "lixo", label: "Lixo", color: "bg-red-50 text-red-400 border-red-200 line-through" },
];

export const SERVICE_SUGGESTIONS: ServiceSuggestion[] = [
  {
    id: "pack_video",
    title: "Pack Vídeo Institucional",
    icon: <Video size={16}/>,
    color: "bg-blue-50 text-blue-600",
    items: [
      { desc: "Captação de Imagem (1 dia)", qty: 1, price: 450 },
      { desc: "Edição e Color Grading", qty: 1, price: 350 },
      { desc: "Locução Profissional", qty: 1, price: 120 }
    ]
  },
  {
    id: "pack_foto",
    title: "Fotografia Corporate",
    icon: <Camera size={16}/>,
    color: "bg-purple-50 text-purple-600",
    items: [
      { desc: "Sessão Fotográfica (4h)", qty: 1, price: 300 },
      { desc: "Edição de 50 Fotos", qty: 1, price: 150 }
    ]
  },
  {
    id: "pack_ai",
    title: "Consultoria AI & Auto",
    icon: <Bot size={16}/>,
    color: "bg-emerald-50 text-emerald-600",
    items: [
      { desc: "Análise de Workflow", qty: 1, price: 600 },
      { desc: "Implementação de Agentes AI", qty: 2, price: 400 }
    ]
  }
];

export const ADMIN_EMAIL = "miguel.carreira@gmail.com";