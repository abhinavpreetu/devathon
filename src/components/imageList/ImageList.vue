<template>
<main class="products-page">
  <p class="page-title">Add details to your project</p>
  <p class="page-subtitle">Unpriced products will be hidden. You can edit them later.</p>
  <section class="imageList">
    <div class="product"
      @click="cardClickHandler(product.id)"
      v-for="product in products"
      :key="product.id">
      <img :src="product.src" alt="product image">
      <div class="info">
        <p class="title">{{product.title}}</p>
        <p class="price">&#x20B9; {{product.price}}</p>
      </div>
      <editProduct v-if="editProductFlag && product.id == selectedProduct" />
    </div>
  </section>
</main>
</template>

<script>
import imageList from './index';

export default imageList;
</script>

<style lang="scss" scoped>
@import "../../sass/_imageList.scss";
</style>
