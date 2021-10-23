const { createStore } = require('vuex');

import product from './modules/product.js';
import cart from './modules/cart.js';

const store = createStore({
  modules: {
    product,
    cart
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
