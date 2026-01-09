const KEY = "recent_searches";

export const getRecent = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveToRecent = (item) => {
  const existing = getRecent();

  const filtered = existing.filter(
    (r) => !(r.id === item.id && r.type === item.type)
  );

  const updated = [{ ...item, createdAt: Date.now() }, ...filtered].slice(0, 10);

  localStorage.setItem(KEY, JSON.stringify(updated));
};
