import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      itemDetails: {
        itemName: "",
        itemDescription: "",
        hours: 0,
        rate: 0,
        tax: 0,
      },
      lineTotal: 0,
    };
  },
  mutations: {
    updateItemDetails(state, payload) {
      state.itemDetails = { ...state.itemDetails, ...payload };
    },
    updateLineTotal(state) {
      state.lineTotal = state.itemDetails.hours * state.itemDetails.rate;
    },
  },
});

export default store;
