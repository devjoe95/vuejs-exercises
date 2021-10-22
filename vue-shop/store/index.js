const { createStore } = require('vuex');

import product from './modules/product.js';
import cart from './modules/product.js';

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
  }
});

export default store;
