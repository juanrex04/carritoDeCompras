<template>
  <div class="col-12 col-sm-4 col-md-3 col-lg-2 my-3">
    <div class="card">
      <img
        :src="productCard.imgUrl"
        :alt="`Image of ${productCard.title}`"
        class="card-img-top fluid"
      />
      <div class="card-body">
        <h5 class="card-title">{{ productCard.title }}</h5>
        <p class="card-text">
          $ <span>{{ productCard.price }}</span>
        </p>
        <button class="btn btn-dark" @click="add(productCard)">Shop</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["productCard"],
  setup() {
    const store = useStore();
    const add = productCard => {
      store.dispatch('enterToCart', productCard)
    };

    return{
      add
    }
  },
};
</script>

<style>
</style>