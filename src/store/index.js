import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: {},
      invoice: {},
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
    setUser(state, payload) {
      state.user = payload;
    },
    setInvoice(state, payload) {
      state.invoice = payload;
    },
  },
});

export default store;
