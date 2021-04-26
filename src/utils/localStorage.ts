function getItem<T>(key: string): Nullable<T> {
  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
}

function removeItem(key: string): void {
  window.localStorage.removeItem(key);
}

function setItem<T>(key: string, value: T): void {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const localStorage = {
  getItem,
  removeItem,
  setItem,
};
