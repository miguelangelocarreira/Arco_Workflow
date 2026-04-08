import React, { useEffect, useState } from 'react';
import { Activity, ArrowLeft, FolderPlus, Trash2, UserPlus, Tag, Plus, Minus } from 'lucide-react';
import { ViewType, ActivityLog } from '../../types';
import { subscribeActivity } from '../../utils/db';

interface ActivityFeedViewProps {
  setView: (view: ViewType) => void;
}

const ACTION_CONFIG: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
  created_project:  { label: "criou o projeto",   icon: <FolderPlus size={14} />, color: "bg-blue-50 text-blue-600" },
  deleted_project:  { label: "apagou o projeto",  icon: <Trash2 size={14} />,     color: "bg-red-50 text-red-500" },
  changed_status:   { label: "alterou o estado",  icon: <Tag size={14} />,        color: "bg-amber-50 text-amber-600" },
  added_item:       { label: "adicionou item a",  icon: <Plus size={14} />,       color: "bg-emerald-50 text-emerald-600" },
  removed_item:     { label: "removeu item de",   icon: <Minus size={14} />,      color: "bg-orange-50 text-orange-500" },
  created_client:   { label: "criou o cliente",   icon: <UserPlus size={14} />,   color: "bg-purple-50 text-purple-600" },
};

const formatTime = (timestamp: number): string => {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return "agora";
  if (mins < 60) return `há ${mins}m`;
  if (hours < 24) return `há ${hours}h`;
  if (days < 7) return `há ${days}d`;
  return new Date(timestamp).toLocaleDateString('pt-PT');
};

export const ActivityFeedView: React.FC<ActivityFeedViewProps> = ({ setView }) => {
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = subscribeActivity(data => {
      setLogs(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div className="p-4 md:p-10 max-w-3xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={() => setView("stats")} className="p-2 bg-white rounded-full shadow-sm border border-slate-100 md:hidden">
          <ArrowLeft size={16} className="text-slate-700" />
        </button>
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Atividade</h1>
          <p className="text-xs text-slate-400 mt-0.5">Registo de todas as ações da equipa</p>
        </div>
      </div>

      {loading && (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 animate-pulse h-16" />
          ))}
        </div>
      )}

      {!loading && logs.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Activity size={40} className="text-slate-200 mb-3" />
          <p className="text-slate-400 font-medium text-sm">Ainda sem atividade registada.</p>
          <p className="text-slate-300 text-xs mt-1">As ações da equipa aparecerão aqui.</p>
        </div>
      )}

      {!loading && logs.length > 0 && (
        <div className="space-y-2">
          {logs.map(log => {
            const config = ACTION_CONFIG[log.action] ?? { label: log.action, icon: <Activity size={14} />, color: "bg-slate-50 text-slate-500" };
            return (
              <div key={log.id} className="bg-white rounded-2xl p-4 border border-slate-100 flex items-start gap-4 hover:shadow-sm transition-all">
                <div className={`p-2 rounded-xl shrink-0 ${config.color}`}>
                  {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800">
                    <span className="font-bold">{log.userName}</span>
                    {" "}{config.label}{" "}
                    <span className="font-bold">{log.entityName}</span>
                    {log.details && (
                      <span className="text-slate-400"> — {log.details}</span>
                    )}
                  </p>
                </div>
                <span className="text-xs text-slate-300 shrink-0 mt-0.5">{formatTime(log.timestamp)}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
