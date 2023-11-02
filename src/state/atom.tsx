// @ts-nocheck
import { atom } from "recoil";

const localStorageEffect = (key) => ({ onSet, setSelf }) => {
  if (typeof localStorage !== `undefined`) {
    const savedState = localStorage.getItem(key);
    if (savedState) {
      setSelf(JSON.parse(savedState));
    }
    onSet((newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    });
  } else {
    console.error(`localStorage is not available in this environment.`);
  }
};

export const cartItems = atom({
  key: "cartItem",
  default: [],
  effects: [
    localStorageEffect('item_saved'),
  ]
});


