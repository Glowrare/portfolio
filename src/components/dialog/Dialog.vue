<template>
  <div
    id="dialog-container"
    aria-labelledby="dialog-title"
    aria-hidden="true"
    class="dialog-container"
    ref="modal"
  >
    <div data-a11y-dialog-hide class="dialog-overlay"></div>
    <div role="document" class="dialog-content px-4 py-5">
      <div class="mb-5">
        <div v-if="success">
          <img src="@/assets/clarity_success-standard-line.svg" alt="" />
          <p>Form Submitted sucessfully</p>
        </div>
        <div v-else>
          <img src="@/assets/codicon_error.svg" alt="" />
          <p class="mb-0">Oops! something went wrong.</p>
          <p>Try again.</p>
        </div>
      </div>
      <button
        type="button"
        class="dialog-button btn btn-danger fw-bold p-0"
        data-a11y-dialog-hide
        aria-label="Close dialog"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import A11yDialog from "a11y-dialog";

export default {
  props: ["success"],
  methods: {
    showModal() {
      const dialog = new A11yDialog(this.$refs.modal);
      dialog.show();
    },
  },
};
</script>

<style scoped>
.dialog-container,
.dialog-overlay {
  position: fixed;
  inset: 0;
}
.dialog-container {
  z-index: 100;
  display: flex;
  font-size: 24px;
  font-weight: 600;
}
.dialog-container[aria-hidden="true"] {
  display: none;
}
.dialog-overlay {
  background-color: var(--brand-dark);
  opacity: 0.6;
}
.dialog-content {
  margin: auto;
  z-index: 2;
  position: relative;
  background-color: var(--brand-light);
  border-radius: 0 3rem;
  min-width: 400px;
  text-align: center;
}
.dialog-button {
  text-transform: uppercase;
  width: 200px;
  border-radius: 30px;
  font-size: 20px;

  transition: all 300ms ease-in-out;
}
.dialog-button:focus,
.dialog-button:hover {
  box-shadow: none;
}
@media only screen and (max-width: 600px) {
  .dialog-content {
    min-width: 320px;
  }
}
</style>