import React, { useState, useMemo } from 'react';
import { Project, Client } from '../../types';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

// Paleta alinhada com o design do site
const PALETTE = [
  '#1e293b', // slate-800 — primary brand
  '#3b82f6', // blue-500
  '#8b5cf6', // violet-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#64748b', // slate-500
  '#0ea5e9', // sky-500
  '#ec4899', // pink-500
];

interface PaidInvoicesDonutProps {
  projects: Project[];
  clients: Client[];
}

export const PaidInvoicesDonut: React.FC<PaidInvoicesDonutProps> = ({ projects, clients }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = useMemo(() => {
    const paidProjects = projects.filter(p => p.status === 'pago');
    const totalPaid = paidProjects.reduce((acc, p) => acc + calcProjectTotal(p), 0);

    const clientMap = new Map<string, number>();
    paidProjects.forEach(p => {
      clientMap.set(p.clientId, (clientMap.get(p.clientId) || 0) + calcProjectTotal(p));
    });

    const chartData = Array.from(clientMap.entries())
      .map(([clientId, value], index) => ({
        id: clientId,
        name: clients.find(c => c.id === clientId)?.name || 'Desconhecido',
        value,
        color: PALETTE[index % PALETTE.length],
        percentage: totalPaid > 0 ? (value / totalPaid) * 100 : 0,
      }))
      .sort((a, b) => b.value - a.value);

    return { chartData, totalPaid };
  }, [projects, clients]);

  // SVG donut segments
  let accumulated = 0;
  const segments = data.chartData.map((item, index) => {
    const offset = 25 - accumulated;
    accumulated += item.percentage;
    return {
      ...item,
      dashArray: `${item.percentage} ${100 - item.percentage}`,
      dashOffset: offset,
    };
  });

  const isEmpty = data.chartData.length === 0;
  const hovered = hoveredIndex !== null ? segments[hoveredIndex] : null;

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-5">Faturação Paga</h3>

      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Donut */}
        <div className="relative w-44 h-44">
          <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
            {/* Track */}
            <circle
              cx="21" cy="21" r="15.91549430918954"
              fill="transparent" stroke="#f1f5f9" strokeWidth="4"
            />
            {isEmpty ? null : segments.map((seg, i) => (
              <circle
                key={seg.id}
                cx="21" cy="21" r="15.91549430918954"
                fill="transparent"
                stroke={seg.color}
                strokeWidth={hoveredIndex === i ? 6 : 4}
                strokeDasharray={seg.dashArray}
                strokeDashoffset={seg.dashOffset}
                strokeLinecap="round"
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <title>{seg.name}: {formatCurrency(seg.value)}</title>
              </circle>
            ))}
          </svg>

          {/* Centro */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {isEmpty ? (
              <span className="text-xs text-slate-300 font-medium text-center px-4">Sem pagamentos</span>
            ) : hovered ? (
              <>
                <span className="text-[10px] text-slate-400 font-bold max-w-[70%] text-center truncate leading-tight">
                  {hovered.name}
                </span>
                <span className="text-base font-black mt-0.5" style={{ color: hovered.color }}>
                  {hovered.percentage.toFixed(1)}%
                </span>
                <span className="text-[10px] text-slate-400 mt-0.5">{formatCurrency(hovered.value)}</span>
              </>
            ) : (
              <>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total</span>
                <span className="text-lg font-black text-slate-900 mt-0.5">{formatCurrency(data.totalPaid)}</span>
              </>
            )}
          </div>
        </div>

        {/* Legenda */}
        {!isEmpty && (
          <div className="mt-5 w-full space-y-1.5">
            {data.chartData.slice(0, 5).map((item, i) => (
              <div
                key={item.id}
                className={`flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-all cursor-pointer ${
                  hoveredIndex === i ? 'bg-slate-50' : 'hover:bg-slate-50/60'
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-slate-600 font-medium flex-1 truncate">{item.name}</span>
                <span className="text-xs font-bold text-slate-400 shrink-0">{item.percentage.toFixed(1)}%</span>
              </div>
            ))}
            {data.chartData.length > 5 && (
              <p className="text-[10px] text-slate-300 text-center pt-1">
                +{data.chartData.length - 5} clientes
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
