<template>
  <purple-bg sectionId="contact">
    <h2 class="sec-header fade-from-left">Where you can reach me.</h2>
    <form action="">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="mb-3 form-floating">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Name"
            />
            <label for="name" class="form-label">Email address</label>
          </div>
          <div class="mb-3 form-floating">
            <label for="email" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3 form-floating">
            <textarea class="form-control" id="messaage" rows="3"></textarea>
            <label for="messaage" class="form-label">Message</label>
          </div>
          <button type="submit" class="btn btn-primary">Send</button>
        </div>
      </div>
    </form>
  </purple-bg>
</template>

<script>
import PurpleBg from "../ui/PurpleBg.vue";
export default {
  components: { PurpleBg },
};
</script>