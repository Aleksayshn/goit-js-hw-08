const setInLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
  }
};

const getFromLocalStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
  }
};

const removeFromLocalStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
  }
};

export default {
setInLocalStorage,
getFromLocalStorage,
removeFromLocalStorage,
};