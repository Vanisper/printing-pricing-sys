import { defineStore } from "pinia";

export const useTabBarStore = defineStore("tabBar", () => {
  const list = ref([
    {
      title: "印刷方式",
      items: [
        {
          name: "胶印",
          path: "/OffestPrinting",
        },
        {
          name: "数码印刷",
          path: "/DigitalPrinting",
        },
      ],
    },
  ]);
  const isCollapse = ref(true);
  return { list, isCollapse };
});
