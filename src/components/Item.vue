<template>
  <tr>
    <td>{{ itemCart.title }}</td>
    <td>{{ itemCart.amount }}</td>
    <td>
      <button class="btn btn-success btn-sm me-3" @click="increase(itemCart.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="diminish(itemCart.id)">-</button>
    </td>
    <td>${{ itemCart.price * itemCart.amount }}</td>
  </tr>
</template>

<script>
import {useStore} from 'vuex'
export default {
  props: ["itemCart"],
  setup(){
    const store = useStore();
    const increase = id => {store.commit('increase', id)}

    const diminish = id => {store.commit('diminish', id)}

    return{
      increase,
      diminish
    }
  }
};
</script>

<style>
</style>