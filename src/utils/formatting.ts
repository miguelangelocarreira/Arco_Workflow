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

export const sanitize = (s: string): string => {
  if (!s) return "";
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
};

export { calcProjectTotal };
