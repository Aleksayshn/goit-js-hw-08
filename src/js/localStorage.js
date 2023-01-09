const setInLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
  }
};

const getFromLocalStorage = key => {
  const serializedState = localStorage.getItem(key);
  return serializedState === null ? undefined : JSON.parse(serializedState);
};

const removeFromLocalStorage = key => {
  localStorage.removeItem(key);
};

export default {
  setInLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
};