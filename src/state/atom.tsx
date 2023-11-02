// @ts-nocheck
import { atom } from "recoil";

const sessionStorageEffect = (key) => ({ onSet, setSelf }) => {
  if (typeof localStorage !== `undefined`) {
    const savedState = sessionStorage.getItem(key);
    if (savedState) {
      setSelf(JSON.parse(savedState));
    }
    onSet((newValue) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });
  } else {
    console.error(`localStorage is not available in this environment.`);
  }
};

export const cartItems = atom({
  key: "cartItem",
  default: [],
  effects: [
    sessionStorageEffect('item_saved'),
  ]
});

export const bannerMessage = atom({
  key: "bannerMessage",
  default: [],
  effects: [
    sessionStorageEffect('banner_message'),
  ]
});


