import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      user: {
        name: "Amanam Israel",
        email: "hello@amanamisrael.com",
        address: {
          street: "jen Boulevard Street 101",
          city: "Malang City, 65115",
          country: "East Java, Indonesia",
        },
        payment: {
          accountName: "Barly Vallendito",
          accountNumber: "9700 0023 4200 2900",
          routingNumber: "084009519",
        },
      },
      invoice: {
        number: "INV-001",
        issuedDate: "2020-01-01",
        dueDate: "2020-01-08",
        billedTo: {
          name: "Zaky Grizzly",
          address: {
            street: "Monlight Agency LTD",
            city: "New York, USA",
          },
        },
      },
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
