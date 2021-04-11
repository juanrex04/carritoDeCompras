import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: {},
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    setEnterProduct(state, payload) {
      state.cart[payload.id] = payload;
    },
    clearCart(state) {
      state.cart = {};
    },
    increase(state, payload) {
      state.cart[payload].amount = state.cart[payload].amount + 1;
    },
    diminish(state, payload) {
      state.cart[payload].amount = state.cart[payload].amount - 1;
      if (state.cart[payload].amount === 0) {
        delete state.cart[payload];
      }
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const res = await fetch("api.json");
        const data = await res.json();
        commit("setProducts", data);
      } catch (error) {
        alert(error);
      }
    },
    enterToCart({ commit, state }, products) {
      state.cart.hasOwnProperty(products.id)
        ? (products.amount = state.cart[products.id].amount + 1)
        : (products.amount = 1);
      commit("setEnterProduct", products);
    },
  },
  getters: {
    totalAmount(state) {
      return Object.values(state.cart).reduce(
        (acc, { amount }) => acc + amount,
        0
      );
    },
    totalPrice(state) {
      return Object.values(state.cart).reduce(
        (acc, { amount, price }) => acc + amount * price,
        0
      );
    },
  },
});
