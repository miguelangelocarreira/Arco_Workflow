import React from 'react';
import { PROJECT_STATUSES } from '../../constants/project-data';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const s = PROJECT_STATUSES.find(x => x.id === status) || PROJECT_STATUSES[0];
  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border ${s.color}`}>
      {s.label}
    </span>
  );
};