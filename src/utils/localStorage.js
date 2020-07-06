function getItem(key) {
  const item = window.localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return null;
}

function setItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const localStorage = {
  getItem,
  setItem,
};
