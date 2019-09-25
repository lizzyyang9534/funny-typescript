import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state: IState = {
  isBark: false
};

export interface IState {
  isBark: boolean;
}

export const actionName = {
  bark: "bark"
};

export default new Vuex.Store({
  state: state,
  mutations: {
    [actionName.bark](state: IState, isBark: boolean) {
      state.isBark = isBark;
    }
  },
  actions: {
    [actionName.bark](context) {
      context.commit(actionName.bark, true);
      setTimeout(() => {
        context.commit(actionName.bark, false);
      }, 1000);
    }
  }
});