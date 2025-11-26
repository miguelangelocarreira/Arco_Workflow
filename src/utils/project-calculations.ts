import { Project } from '../types';

export const calcProjectTotal = (project: Project): number => {
  if (!project || !project.items) return 0;
  const subtotal = project.items.reduce(
    (acc, it) => acc + (Number(it.qty) || 0) * (Number(it.price) || 0),
    0
  );
  const discount = Number(project.discount) || 0;
  const afterDiscount = subtotal - (subtotal * discount) / 100;
  return afterDiscount * 1.23; // Add 23% VAT
};