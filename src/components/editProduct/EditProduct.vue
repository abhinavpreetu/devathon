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
      <input
        type="file"
        name="myfile"
        @input="addImage($event)"
        multiple="true"
        drop="true"/>
    </div>
  </section>
  <section class="properties">
    <div class="fixed">
      <label for="productTitle">product title</label>
      <input
        type="text"
        id="productTitle"
        placeholder="Enter product title"
        v-model="product.title">

      <label for="productPrice">price</label>
      <div class="flex">
        <p>&#x20B9;</p>
        <input
          type="text"
          id="productPrice"
          placeholder="Enter product price"
          @input="formatPrice($event)"
          v-model="product.price">
      </div>

      <label for="productOfferPrice">offer price</label>
      <div class="flex">
        <p>&#x20B9;</p>
        <input
          type="text"
          id="productOfferPrice"
          @input="formatPrice"
          placeholder="Enter offer price"
          v-model="product.offerPrice">
      </div>

      <label for="productShippingCost">shipping cost</label>
      <div class="flex">
        <p>&#x20B9;</p>
        <input
          type="text"
          @input="formatPrice"
          id="productShippingCost"
          placeholder="Enter shipping cost"
          v-model="product.shippingCost">
      </div>

      <label for="productCount">product title</label>
      <select id="productCount" v-model="product.count">
        <option :value="i" v-for="i in inventoryArr" :key="i">{{i}}</option>
      </select>
    </div>
    <div :class="['variation', { 'zeroth' : product.variables.length == 0 }]">
      <section v-if="product.variables.length">
        <div v-for="(option, index) in product.variables" :key="index" class="options">
          <label>{{option.name}}</label>
          <input
            type="text"
            v-for="(value, ind) in option.values"
            v-model="value.title"
            placeholder="Enter option name"
            :key="ind" />
          <button @click="addVariables(index)">
            <span class="add-button">+</span> Add more variation
          </button>
        </div>
        <button class="big" @click="addOptions">
          <span class="add-button">+</span> Add more variation
        </button>
      </section>
      <div class="zeroth" v-else>
        <button @click="addOptions">+</button>
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
        v-model="product.description"
        placeholder="Enter Description for Project">
    </div>
    <button class="save" @click="saveHandler"></button>
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
