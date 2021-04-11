import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
    cart: {},
    notification: [],
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
    pushNotification(state, payload) {
      state.notification.push({
        ...payload,
        id:
          Math.random.toString(36) +
          Date.now()
            .toString(36)
            .substr(2),
      });
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
    enterToCart({ commit, state, dispatch }, products) {
      state.cart.hasOwnProperty(products.id)
        ? (products.amount = state.cart[products.id].amount + 1)
        : (products.amount = 1);

      dispatch("showNotification", {
        type: "success",
        message:
          "✔ Successfully, this product added to shopping cart.",
      }, {root: true});
      commit("setEnterProduct", products);
    },
    showNotification({ commit }, notification) {
      commit("pushNotification", notification);
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
