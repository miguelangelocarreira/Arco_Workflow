import React, { useState } from 'react';
import { formatCurrency } from '../../helpers/formatters';

interface ChartData {
  id: string;
  label: string;
  value: number;
  color: string;
}

interface ClientDistributionChartProps {
  data: ChartData[];
  totalValue: number;
}

export const ClientDistributionChart: React.FC<ClientDistributionChartProps> = ({ data, totalValue }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter out items with 0 value to avoid rendering issues
  const activeData = data.filter(d => d.value > 0);
  
  if (activeData.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-slate-400 text-sm">
        Sem dados para apresentar
      </div>
    );
  }

  // Calculate segments
  let cumulativeAngle = 0;
  const segments = activeData.map((item, index) => {
    const percentage = item.value / totalValue;
    const angle = percentage * 360;
    const startAngle = cumulativeAngle;
    cumulativeAngle += angle;

    // SVG arc calculations
    // Center (100, 100), Radius 80
    const x1 = 100 + 80 * Math.cos(Math.PI * startAngle / 180);
    const y1 = 100 + 80 * Math.sin(Math.PI * startAngle / 180);
    const x2 = 100 + 80 * Math.cos(Math.PI * (startAngle + angle) / 180);
    const y2 = 100 + 80 * Math.sin(Math.PI * (startAngle + angle) / 180);

    // Large arc flag
    const largeArcFlag = angle > 180 ? 1 : 0;

    // Path command
    const pathData = [
      `M 100 100`,
      `L ${x1} ${y1}`,
      `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      `Z`
    ].join(' ');

    return {
      ...item,
      pathData,
      startAngle,
      angle,
      originalIndex: index
    };
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 h-full">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 200 200" className="transform -rotate-90 w-full h-full">
          {segments.map((segment, index) => (
            <path
              key={segment.id}
              d={segment.pathData}
              fill={segment.color}
              stroke="white"
              strokeWidth="2"
              className="transition-all duration-300 cursor-pointer"
              style={{
                transformOrigin: '100px 100px',
                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
          {/* Inner circle to make it a donut */}
          <circle cx="100" cy="100" r="50" fill="white" />
        </svg>
        
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            {hoveredIndex !== null ? activeData[hoveredIndex].label : 'Total'}
          </span>
          <span className="text-lg font-black text-slate-900">
            {formatCurrency(hoveredIndex !== null ? activeData[hoveredIndex].value : totalValue)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex-1 space-y-3 max-h-64 overflow-y-auto w-full no-scrollbar">
        {activeData.map((item, index) => (
          <div 
            key={item.id}
            className={`flex items-center justify-between p-2 rounded-xl transition-colors cursor-pointer ${
              hoveredIndex === index ? 'bg-slate-50' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full shadow-sm" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className={`text-sm font-bold ${hoveredIndex === index ? 'text-slate-900' : 'text-slate-600'}`}>
                {item.label}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-lg">
              {formatCurrency(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
