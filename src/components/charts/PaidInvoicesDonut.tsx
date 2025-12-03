import React, { useState, useMemo } from 'react';
import { Project, Client } from '../../types';
import { formatCurrency, calcProjectTotal } from '../../utils/formatting';

interface PaidInvoicesDonutProps {
  projects: Project[];
  clients: Client[];
}

export const PaidInvoicesDonut: React.FC<PaidInvoicesDonutProps> = ({ projects, clients }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = useMemo(() => {
    // 1. Filtrar projetos pagos
    const paidProjects = projects.filter(p => p.status === 'pago');
    const totalPaid = paidProjects.reduce((acc, p) => acc + calcProjectTotal(p), 0);

    // 2. Agrupar por cliente
    const clientMap = new Map<string, number>();
    paidProjects.forEach(p => {
      const current = clientMap.get(p.clientId) || 0;
      clientMap.set(p.clientId, current + calcProjectTotal(p));
    });

    // 3. Preparar dados para o gráfico
    const chartData = Array.from(clientMap.entries()).map(([clientId, value], index) => {
      const client = clients.find(c => c.id === clientId);
      return {
        id: clientId,
        name: client?.name || 'Desconhecido',
        value,
        color: `hsl(${index * 137.5 % 360}, 70%, 50%)`, // Cores diferentes baseadas no índice
        percentage: totalPaid > 0 ? (value / totalPaid) * 100 : 0
      };
    }).sort((a, b) => b.value - a.value); // Ordenar por valor

    return { chartData, totalPaid };
  }, [projects, clients]);

  // Cálculos para o SVG Donut
  let accumulatedPercentage = 0;
  const donuts = data.chartData.map((item, index) => {
    const { percentage } = item;
    // O círculo tem perímetro 100 (para facilitar contas) -> dasharray="percentage 100"
    // offset = 25 (começa no topo) - acumulado
    const dashOffset = 25 - accumulatedPercentage;
    accumulatedPercentage += percentage;
    
    return {
      ...item,
      dashArray: `${percentage} ${100 - percentage}`,
      dashOffset
    };
  });

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
      <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Faturação Paga</h3>
      
      <div className="flex-1 flex flex-col items-center justify-center relative min-h-[200px]">
        {/* Gráfico Donut SVG */}
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 42 42" className="w-full h-full">
            {/* Fundo do Donut (se vazio) */}
            <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f1f5f9" strokeWidth="5"></circle>

            {donuts.map((item, index) => (
              <circle
                key={item.id}
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke={item.color}
                strokeWidth={hoveredIndex === index ? "8" : "5"} // Aumenta espessura no hover
                strokeDasharray={item.dashArray}
                strokeDashoffset={item.dashOffset}
                className="transition-all duration-300 cursor-pointer hover:opacity-80"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <title>{item.name}: {formatCurrency(item.value)}</title>
              </circle>
            ))}
          </svg>
          
          {/* Texto Central */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {hoveredIndex !== null ? (
              <>
                <span className="text-xs text-slate-400 font-bold max-w-[80%] text-center truncate px-2">
                  {donuts[hoveredIndex].name}
                </span>
                <span className="text-lg font-black text-slate-900" style={{ color: donuts[hoveredIndex].color }}>
                  {formatCurrency(donuts[hoveredIndex].value)}
                </span>
              </>
            ) : (
              <>
                <span className="text-xs text-slate-400 font-bold">Total</span>
                <span className="text-xl font-black text-slate-900">{formatCurrency(data.totalPaid)}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legenda (Opcional, se houver muitos items pode ser cortada) */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        {data.chartData.slice(0, 4).map((item, index) => (
          <div 
            key={item.id} 
            className={`flex items-center gap-1 text-[10px] px-2 py-1 rounded-full border transition-opacity cursor-pointer ${hoveredIndex === index ? 'bg-slate-50 opacity-100 ring-2 ring-offset-1' : 'bg-white opacity-70'}`}
            style={{ borderColor: item.color }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className="font-bold text-slate-600">{item.name}</span>
          </div>
        ))}
        {data.chartData.length > 4 && (
          <span className="text-[10px] text-slate-400 self-center">+{data.chartData.length - 4}</span>
        )}
      </div>
    </div>
  );
};
