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
          <th scope="row" colspan="5">Empty Cart - Start to shop!</th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import Item from "./Item";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Item,
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