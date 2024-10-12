import { defineStore } from "pinia";
import { LoginVO } from "@/core/model/Auth";

export const userStore = defineStore('userStore', {
  state: () => ({
    loginVO: {} as LoginVO,
  }),
  actions: {
    setUser(loginVO: LoginVO) {
      this.loginVO = loginVO;
    },
  },
  getters: {
    getLoginVO(): LoginVO {
      return this.loginVO;
    },
  },
});