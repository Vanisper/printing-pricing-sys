import { defineStore } from "pinia";

export const useAppStores = defineStore("app", () => {
  const defaultTitle = "印刷计价系统";
  const setDefaultTitle = () => {
    document.title = defaultTitle;
  };
  return { defaultTitle, setDefaultTitle };
});
