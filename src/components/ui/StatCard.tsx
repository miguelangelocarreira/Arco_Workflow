import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  helper?: string;
  icon: React.ReactNode;
  trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, helper, icon, trend }) => (
  <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-default">
    <div className="flex justify-between items-start">
      <span className="p-3 rounded-2xl bg-slate-50 text-slate-600">
        {icon}
      </span>
      <div className="text-right">
        <span className="text-2xl font-black text-slate-900 block">{value}</span>
        {trend && <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-md">{trend}</span>}
      </div>
    </div>
    <div>
      <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
        {label}
      </span>
      {helper && (
        <span className="text-[11px] text-slate-500 leading-tight block">
          {helper}
        </span>
      )}
    </div>
  </div>
);