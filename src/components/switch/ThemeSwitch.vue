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
}
</style>