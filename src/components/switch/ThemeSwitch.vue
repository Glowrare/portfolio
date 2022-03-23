<template>
  <div @click="$emit('changeTheme')">
    <img
      src="@/assets/switch-light.svg"
      alt="react"
      class="img-fluid"
      aria-label="Turn on dark Mode"
      v-if="lightTheme"
    />
    <img
      src="@/assets/switch-dark.svg"
      alt="react"
      class="img-fluid"
      aria-label="Turn on light Mode"
      v-else
    />
  </div>
</template>

<script>
export default {
  props: ["lightTheme"],
  emits: ["changeTheme"],
};
</script>

<style scoped>
div {
  position: fixed;
  right: 100px;
  top: 50%;
  cursor: pointer;
  z-index: 3;
}
@media only screen and (max-width: 768px) {
  div {
    right: 15px;
    top: 80px;
  }
  img {
    width: 30px;
  }
}
</style>