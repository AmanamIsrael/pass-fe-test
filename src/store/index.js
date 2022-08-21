import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      beans: 0,
    };
  },
  mutations: {
    addBeans(state, amount) {
      state.beans += amount;
    },
  },
});

export default store;
