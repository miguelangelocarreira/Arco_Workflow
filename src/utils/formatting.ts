import { calcProjectTotal } from './project-calculations';

export const formatCurrency = (value: number): string => {
  try {
    return new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR",
    }).format(value || 0);
  } catch {
    return `${value || 0} €`;
  }
};

export const sanitize = (s: string): string => (s || "").replace(/[<>]/g, "");

export { calcProjectTotal };