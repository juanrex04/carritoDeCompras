<template>
  <th scope="row" colspan="2">Total products</th>
  <td>{{ totalAmount }}</td>
  <td>
    <button class="btn btn-danger btn-sm" id="clearCart" @click="clearAll">
      Clear All!
    </button>
  </td>
  <td class="font-weight-bold">
    $ <span>{{ totalPrice }}</span>
  </td>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const totalAmount = computed(() => store.getters.totalAmount);
    const totalPrice = computed(() => store.getters.totalPrice);

    const clearAll = () => {
      store.commit("clearCart");
    };

    return {
      totalAmount,
      totalPrice,
      clearAll,
    };
  },
};
</script>

<style>
</style>