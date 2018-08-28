<template>
<main>
  <imageList />
  <div class="overlay" v-if="editProductFlag" @click="toggleEditProduct(false)"></div>
</main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import imageList from './imageList/ImageList';

const IMAGES = 'IMAGES';

export default {
  name: 'layout',

  components: {
    imageList,
  },

  computed: {
    ...mapGetters({
      editProductFlag: 'editProduct',
      products: 'getProducts',
    }),
  },

  methods: {
    ...mapActions([
      'toggleEditProduct',
      'addImages',
    ]),
  },

  mounted() {
    let images = localStorage.getItem(IMAGES);
    if (images) {
      images = JSON.parse(images);
      images.forEach((image, index) => {
        if (image) {
          this.addImages({ urls: image, index });
        }
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
