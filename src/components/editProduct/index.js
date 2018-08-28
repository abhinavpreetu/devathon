import { mapGetters, mapActions } from 'vuex';

const inventoryArr = [...Array(10).keys()];
const IMAGES = 'IMAGES';

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
    files: [],
    count: null,
    imageIndex: 0,
  }),

  computed: {
    ...mapGetters({
      productDetails: 'selectedProductsDetails',
      selectedProduct: 'selectedProduct',
    }),

    inventoryArr: () => inventoryArr,
  },

  watch: {
    files: function () { //eslint-disable-line
      if (this.files.length === this.count) {
        let images = localStorage.getItem(IMAGES);
        images = images ? JSON.parse(images) : [];
        const imagesArr = images[this.selectedProduct];
        const uris = imagesArr ? [...imagesArr, ...this.files] : [...this.files];
        images[this.selectedProduct] = uris;
        localStorage.setItem(IMAGES, JSON.stringify(images));
        this.addImages({ urls: this.files });
        this.files = [];
      }
    },
  },

  methods: {
    ...mapActions([
      'changeProductDetails',
      'addImages',
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
      const { variables } = this.product;
      variables.push({
        name: `option ${this.product.variables.length + 1}`,
        values: [
          {
            title: '',
          },
        ],
      });
      this.$set(this.product, 'variables', variables);
    },

    addVariables(index) {
      const { variables } = this.product;
      const values = variables[index].values;
      values.push({
        title: '',
      });
      this.$set(this.product.variables[index], 'values', values);
    },

    addImage(event) {
      const { files } = event.target;
      const filesArr = [...files];
      this.count = filesArr.length;
      const self = this;
      filesArr.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () { //eslint-disable-line
          self.files.push(reader.result);
        };
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

    setImageIndex(index) {
      this.imageIndex = index;
    },
  },

  mounted() {
    this.updateModalPosition();
    if (this.productDetails) {
      this.product = { ...this.productDetails, variables: [] };
      const self = this;
      this.productDetails.variables.forEach((opt) => {
        const data = {
          name: opt.name,
          values: [],
        };
        data.values = [...opt.values];
        self.product.variables.push(data);
      });
      this.product.price = this.product.price.toLocaleString('en-IN');
      this.product.offerPrice = this.product.offerPrice.toLocaleString('en-IN');
    }
  },
};
