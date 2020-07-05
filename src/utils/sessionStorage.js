function getItem(key) {
  const item = window.sessionStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
}

function setItem(key, value) {
  window.sessionStorage.setItem(key, JSON.stringify(value));
}

export const sessionStorage = {
  getItem,
  setItem,
};
