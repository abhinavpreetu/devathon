<template>
<main class="edit-product">
  <section class="image">
    <img :src="productDetails.src" alt="product image">
    <div class="upload-btn-wrapper">
      <button class="btn">
        <p>
          <span class="add">+</span>
          <span class="title">Add more photos</span>
          <span>drop file here</span>
        </p>
      </button>
      <input type="file" name="myfile" multiple="true" drop="true"/>
    </div>
  </section>
  <section class="properties">
    <div class="fixed">
      <label for="productTitle">product title</label>
      <input
        type="text"
        id="productTitle"
        placeholder="Enter product title"
        v-model="productTitle">

      <label for="productPrice">price</label>
      <input
        type="text"
        id="productPrice"
        placeholder="Enter product price"
        v-model="productPrice">

      <label for="productOfferPrice">offer price</label>
      <input
        type="text"
        id="productOfferPrice"
        placeholder="Enter offer price"
        v-model="productOfferPrice">

      <label for="productShippingCost">shipping cost</label>
      <input
        type="text"
        id="productShippingCost"
        placeholder="Enter shipping cost"
        v-model="productShippingCost">

      <label for="productCount">product title</label>
      <select id="productCount">
        <option :value="i" v-for="i in inventoryArr" :key="i">{{i}}</option>
      </select>
    </div>
    <div :class="['variation', { 'zeroth' : productDetails.variables.length == 0 }]">
      <section v-if="productDetails.variables.length">
        <div v-for="(option, index) in productDetails.variables" :key="index" class="options">
          <label>{{option.name}}</label>
          <input
            type="text"
            v-for="(value, ind) in option.values"
            v-model="value.title"
            placeholder="Enter option name"
            :key="ind" />
          <button><span class="add-button">+</span> Add more variation</button>
        </div>
        <button class="big"><span class="add-button">+</span> Add more variation</button>
      </section>
      <div class="zeroth" v-else>
        <button>+</button>
        <p>Have variations to your product like size, color and more?</p>
      </div>
    </div>
  </section>
  <section class="footer">
    <div>
      <label for="productDescription">description</label>
      <input
        type="text"
        id="productDescription"
        v-model="productDescription"
        placeholder="Enter Description for Project">
    </div>
    <button class="save"></button>
  </section>
</main>
</template>

<script>
import editProduct from './index';

export default editProduct;
</script>

<style lang="scss" scoped>
@import "../../sass/editProduct";
</style>
