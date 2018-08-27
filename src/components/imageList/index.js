import { mapGetters, mapActions } from 'vuex';
import editProduct from '../editProduct/EditProduct';

export default {
  name: 'ImageList',

  computed: {
    ...mapGetters({
      products: 'getProducts',
      editProductFlag: 'editProduct',
      selectedProduct: 'selectedProduct',
    }),
  },

  components: {
    editProduct,
  },

  methods: {
    ...mapActions([
      'toggleEditProduct',
      'setSelectedProduct',
    ]),

    cardClickHandler(event, productId) {
      this.setSelectedProduct(productId);
      this.toggleEditProduct(true);
    },
  },
};
