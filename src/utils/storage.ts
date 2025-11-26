export const storage = {
  get: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },
  set: (key: string, val: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch {}
  },
  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch {}
  },
};