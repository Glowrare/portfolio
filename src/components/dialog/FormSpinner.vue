<template>
  <div
    class="
      spinner-wrapper
      position-fixed
      start-0
      end-0
      top-0
      bottom-0
      d-flex
      justify-content-center
      align-items-center
    "
  >
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
.spinner-wrapper {
  z-index: 1000;
  background: var(--overlay-bg);
  color: var(--brand-light-alt);
}
.spinner-border {
  width: 50px;
  height: 50px;
  border-width: 7px;
}
</style>