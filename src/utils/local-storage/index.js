// Put the object into storage
export const setLocalStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// Retrieve the object from storage
export const getLocalStorageItem = (key) => localStorage.getItem(key);