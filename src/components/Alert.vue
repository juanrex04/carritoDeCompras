<template>
  <div :class="typeClass" class="alert-style alert alert-dismissible fade show" role="alert">
    {{notification.message}}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  props:['notification'],
  computed:{
    typeClass(){
      return `alert-${this.notification.type}`
    }
  }
};
</script>

<style>
.alert-style{
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>