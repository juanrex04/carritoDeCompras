<template>
  <div class="container text-center">
    <h1 class="mb-4">Carro de Compras</h1>
    <!-- <pre></pre> -->
    <div class="row">
      <Card v-for="product of productsList" :key="product.id" :productCard="product"/>
    </div>
    <hr>
    <Cart/>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "./components/Card";
import Cart  from "./components/Cart";
export default {
  name: "App",
  components: {
    Card,
    Cart
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    });
    const productsList = computed(() => store.state.products)
    const carro = computed(() => store.state.cart)

    return{
      productsList,
      carro
    }
  },
};
</script>

<style>
</style>
