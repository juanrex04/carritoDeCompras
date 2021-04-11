<template>
  <div class="container text-center">
    <h1 class="my-4">Cart Shop</h1>
    <!-- <pre></pre> -->
    <div class="row">
      <Card
        v-for="product of productsList"
        :key="product.id"
        :productCard="product"
      />
    </div>
    <hr />
    <Cart />
    <Alert v-for="notification in notifications" :key="notification.id" :notification="notification"/>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import Card from "./components/Card";
import Cart from "./components/Cart";
import Alert from "./components/Alert";

export default {
  name: "App",
  components: {
    Card,
    Cart,
    Alert,
  },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("fetchData");
    });
    const productsList = computed(() => store.state.products);

    const notifications = computed(() => store.state.notification);

    return {
      productsList,
      notifications
    };
  },
};
</script>

<style>
</style>
