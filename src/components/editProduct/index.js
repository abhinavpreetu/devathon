import { mapGetters } from 'vuex';

export default {
  name: 'EditProduct',

  data: () => ({
    productTitle: '',
    productPrice: '',
    productOfferPrice: '',
    productShippingCost: '',
    inventoryArr: [...Array(10).keys()],
    productVariables: [],
    productDescription: '',
  }),

  computed: {
    ...mapGetters({
      productDetails: 'selectedProductsDetails',
    }),
  },

  mounted() {
    if (this.productDetails) {
      const {
        title,
        price,
        offerPrice,
        shippingCost,
        variables,
        description,
      } = this.productDetails;
      this.productTitle = title;
      this.productPrice = price;
      this.productOfferPrice = offerPrice;
      this.productShippingCost = shippingCost;
      this.productVariables = variables;
      this.productDescription = description;
    }
  },
};
