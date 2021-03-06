export default {
  namespaced: true,
  state() {
    return { items: [], total: 0, qty: 0 };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;
      const productInCartIndex = state.items.findIndex(
        item => item.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },

    removeProductFromCart(state, payload) {
      const productInCartIndex = state.items.findIndex(
        item => item.productId === payload.productId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addToCart(context, payload) {
      const products = context.rootGetters['product/products'];
      const product = products.find(
        product => product.id === payload.productId
      );
      context.commit('addProductToCart', product);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    }
  },
  getters: {
    products(state) {
      return state.items;
    },
    totalPrice(state) {
      return state.total.toFixed(2);
    },
    quantity(state) {
      return state.qty;
    }
  }
};
