export const storeItem = (key, item) => {
  const storedItem = localStorage.setItem(key, JSON.stringify(item));

  return storedItem;
};

export const retrieveItem = (key) => {
  const retrievedItem = JSON.parse(localStorage.getItem(key));

  return retrievedItem;
};
export const removeItem = (key) => {
  const removedItem = localStorage.removeItem(key);

  return removedItem;
};
