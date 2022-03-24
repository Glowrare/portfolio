<template>
  <section :id="sectionId">
    <container>
      <slot></slot>
    </container>
  </section>
</template>

<script>
export default {
  props: {
    sectionId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
  background: var(--theme-clr);
  color: var(--theme-light);
}
.darkmode section {
  background: #2e2323;
}
</style>