<template>
  <tr>
    <td>{{ itemCart.title }}</td>
    <td>{{ itemCart.amount }}</td>
    <td>
      <button class="btn btn-success btn-sm me-3">+</button>
      <button class="btn btn-danger btn-sm">-</button>
    </td>
    <td>${{ itemCart.price * itemCart.amount }}</td>
  </tr>
</template>

<script>
export default {
  props: ["itemCart"],
};
</script>

<style>
</style>