// import { createLi } from './ui.js';

const getFromStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const writeToStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

// console.log(createLi);

export { getFromStorage, writeToStorage };
