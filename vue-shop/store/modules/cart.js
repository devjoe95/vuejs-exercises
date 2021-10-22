export default {
  namespaced: true,
  state() {
    return { items: [], total: 0, qty: 0 };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload.product;
      const productInCartIndex = state.items.findIndex(
        ci => ci.productId === productData.id
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
      state.total += payload.id.price;
    },

    removeProductFromCart(state, payload) {
      const productInCartIndex = this.cart.items.findIndex(
        cartItem => cartItem.productId === payload.productId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit('addProductToCart', payload);
    },
    removeFromCart(context, payload) {
      context.commit('removeProductFromCart', payload);
    }
  },
  getters: {
    cartItems(state) {
      return state.items;
    },
    totalPrice(state) {
      return state.total;
    },
    quantity(state) {
      return state.qty;
    }
  }
};
