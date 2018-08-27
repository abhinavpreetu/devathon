import Vue from 'vue';
import Vuex from 'vuex';
import types from './mutation-types';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'somename1',
        src: image1,
        price: 80,
        offerPrice: null,
        shippingCost: 0,
        description: 'description 1',
        variables: [
          {
            name: 'option 1',
            values: [
              {
                title: 'red',
              },
              {
                title: 'blue',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: 'somename2',
        src: image2,
        price: 800,
        offerPrice: null,
        shippingCost: 100,
        description: 'description 2',
        variables: [],
      },
      {
        id: 3,
        title: 'somename3',
        src: image3,
        price: 56,
        offerPrice: 20,
        shippingCost: 0,
        description: '',
        variables: [],
      },
      {
        id: 4,
        title: 'somename4',
        src: image4,
        price: 840,
        offerPrice: null,
        shippingCost: 0,
        description: 'description 4',
        variables: [],
      },
      {
        id: 5,
        title: 'somename5',
        src: image5,
        price: 805,
        offerPrice: null,
        shippingCost: 0,
        description: 'description 5',
        variables: [],
      },
      {
        id: 6,
        title: 'somename6',
        src: image6,
        price: 801,
        offerPrice: 300,
        shippingCost: 120,
        description: 'description 6',
        variables: [],
      },
    ],
    editProduct: false,
    selectedProduct: null,
  },

  mutations: {
    [types.toggleEditProduct](state, payload) {
      state.editProduct = payload;
    },

    [types.setSelectedProduct](state, payload) {
      state.selectedProduct = payload;
    },
  },

  getters: {
    getProducts: state => state.products,
    editProduct: state => state.editProduct,
    selectedProduct: state => state.selectedProduct,
    selectedProductsDetails: state => state.products.filter(product =>
      product.id === state.selectedProduct)[0],
  },

  actions: {
    toggleEditProduct({ commit }, payload) {
      commit(types.toggleEditProduct, payload);
    },

    setSelectedProduct({ commit }, payload) {
      commit(types.setSelectedProduct, payload);
    },
  },
});
