<template>
  <div class="my-5">
    <h4>Products</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody id="items">
        <Item v-for="item in items" :key="item.id" :itemCart="item" />
      </tbody>
      <tfoot>
        <tr id="footer-cart">
          <th scope="row" colspan="5" v-if="Object.keys(items).length === 0">Empty Cart - Start to shop!</th>
          <Footer v-else/>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Item from "./Item";
import Footer from "./Footer";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Item,
    Footer,
  },
  setup() {
    const store = useStore();
    const items = computed(() => store.state.cart);
    return {
      items,
    };
  },
};
</script>

<style>
</style>