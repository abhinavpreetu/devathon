import { mapGetters, mapActions } from 'vuex';

const inventoryArr = [...Array(10).keys()];

export default {
  name: 'EditProduct',

  data: () => ({
    product: {
      title: '',
      price: '',
      offerPrice: '',
      shippingCost: '',
      variables: [],
      description: '',
      count: null,
    },
  }),

  computed: {
    ...mapGetters({
      productDetails: 'selectedProductsDetails',
    }),

    inventoryArr: () => inventoryArr,

    formattedPrice() {
      return this.price.toLocaleString('en-IN');
    },
  },

  methods: {
    ...mapActions([
      'changeProductDetails',
    ]),

    formatPrice(event) {
      const { id } = event.target;
      if (id === 'productPrice') {
        this.product.price = this.insetComma(this.removeComma(this.product.price));
      } else if (id === 'productOfferPrice') {
        this.product.offerPrice = this.insetComma(this.removeComma(this.product.offerPrice));
      } else {
        this.product.shippingCost = this.insetComma(this.removeComma(this.product.shippingCost));
      }
    },

    insetComma(val) {
      return Number(val).toLocaleString('en-IN');
    },

    removeComma(str) {
      return str.replace(/,/g, '');
    },

    addOptions() {
      this.product.variables.push({
        name: `option ${this.product.variables.length + 1}`,
        values: [
          {
            title: '',
          },
        ],
      });
    },

    addVariables(index) {
      this.product.variables[index].values.push({
        title: '',
      });
    },

    saveHandler() {
      this.changeProductDetails(this.product);
    },

    updateModalPosition() {
      const ele = this.$el;
      const rect = ele.getBoundingClientRect();
      const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
      let width = windowWidth - (rect.left + rect.width);
      const computedProperties = window.getComputedStyle(ele);
      let left = 0;

      if (width < 0) {
        width = -(width);
        left = parseInt(computedProperties.top, 10);
        ele.setAttribute('style', `left : ${left - width - 100}px`);
      }
    },
  },

  mounted() {
    this.updateModalPosition();
    if (this.productDetails) {
      this.product = { ...this.productDetails };
    }
    this.product.price = this.product.price.toLocaleString('en-IN');
    this.product.offerPrice = this.product.offerPrice.toLocaleString('en-IN');
  },
};
