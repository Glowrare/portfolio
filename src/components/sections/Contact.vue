<template>
  <purple-bg sectionId="contact">
    <h2 class="sec-header fade-from-left">Where you can reach me.</h2>
    <form
      @submit.prevent="
        $emit('submit-handler', { name: name, email: email, message: message })
      "
      class="contact-form"
    >
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="mb-5 form-floating fade-from-right">
            <input
              type="text"
              class="form-control app-input"
              id="name"
              placeholder="Name"
              required
              v-model.trim="name"
            />
            <label for="name" class="form-label app-label">Name</label>
          </div>
          <div class="mb-5 form-floating fade-from-left">
            <input
              type="email"
              class="form-control app-input"
              id="email"
              placeholder="name@example.com"
              required
              v-model.trim="email"
            />
            <label for="email" class="form-label app-label">Email</label>
          </div>
          <div class="mb-5 position-relative fade-from-right">
            <textarea
              class="form-control app-textarea"
              id="message"
              rows="3"
              placeholder="Message"
              v-model.trim="message"
              required
            ></textarea>
            <label for="message" class="form-label app-label visually-hidden"
              >Message</label
            >
          </div>
          <button
            type="submit"
            class="btn send-btn fw-bold position-relative fade-from-bottom"
          >
            Send
          </button>
        </div>
      </div>
    </form>
    <FormSpinner v-if="loading" />
  </purple-bg>
</template>

<script>
import PurpleBg from "../ui/PurpleBg.vue";
import FormSpinner from "../dialog/FormSpinner.vue";

// const FORMSPARK_ACTION_URL = "https://submit-form.com/nA3zyAi1";

export default {
  components: { PurpleBg, FormSpinner },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  emits: ["submit-handler"],
  props: ["success", "loading"],
  watch: {
    success(val) {
      if (val) {
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },
  // methods: {
  //   async submitHandler() {
  //     await fetch(FORMSPARK_ACTION_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: this.name,
  //         email: this.email,
  //         message: this.message,
  //       }),
  //     });
  //     alert("Form submitted");
  //   },
  // },
};
</script>

<style scoped>
.contact-form {
  font-size: 1.6rem;
}
.app-label {
  padding-left: 20px;
}
::placeholder,
.app-input,
.app-label,
textarea.app-textarea {
  color: var(--theme-clr);
}
.app-input,
textarea.app-textarea {
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
}
.app-input:focus,
textarea.app-textarea:focus {
  border-color: var(--brand-light-alt);
  box-shadow: none;
}

::placeholder,
.app-label {
  font-size: 2.4rem;
}
.app-input,
textarea.app-textarea {
  background: var(--theme-light);
  border-radius: 30px;
  text-indent: 10px;
}
.form-floating > .app-input {
  height: 70px;
}
textarea.app-textarea {
  min-height: 100px;
}
.send-btn {
  text-transform: uppercase;
  width: 250px;
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
  color: var(--theme-clr);
  background: var(--theme-light);

  transition: all 300ms ease-in-out;
}
.send-btn:focus,
.send-btn:hover {
  background: var(--brand-light-alt);
  box-shadow: none;
}
</style>