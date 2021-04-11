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
  modules: {},
});
