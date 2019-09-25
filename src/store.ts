import Vue from "vue";
import Vuex from "vuex";
import { color } from "@/enum/color";

Vue.use(Vuex);

const state: IState = {
  isBark: false,
  color: color.black
};

export interface IState {
  isBark: boolean;
  color: color;
}

export const actionName = {
  bark: "bark",
  changeColorOfDog: "changeColorOfDog"
};

export default new Vuex.Store({
  state: state,
  mutations: {
    [actionName.bark](state: IState, isBark: boolean) {
      state.isBark = isBark;
    },
    [actionName.changeColorOfDog](state: IState, color: color) {
      state.color = color;
    }
  },
  actions: {
    [actionName.bark](context) {
      context.commit(actionName.bark, true);
      setTimeout(() => {
        context.commit(actionName.bark, false);
      }, 1000);
    },
    [actionName.changeColorOfDog](context, color: color) {
      context.commit(actionName.changeColorOfDog, color);
    }
  }
});