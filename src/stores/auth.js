import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("Auth", () => {
  let isAuth = ref(false);

  return { isAuth };
});
