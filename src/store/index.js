import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      itemDetails: {
        itemName: "",
        itemDescription: "",
        hours: 120,
        rate: 40,
        tax: 30,
      },
      lineTotal: 0,
      discount: 0,
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
