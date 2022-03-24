<template>
  <purple-bg sectionId="skills">
    <h2 class="sec-header fade-from-left">What I know.</h2>
    <div class="row justify-content-between">
      <div class="col-3 d-none d-lg-block fade-from-bottom position-relative">
        <img src="@/assets/humaans.svg" alt="" class="img-fluid" />
      </div>
      <div class="col-lg-7 col-12 position-relative fade-in">
        <div class="row text-center">
          <div class="col-12 col-sm-6">
            <div class="row g-4">
              <div class="col-6">
                <img
                  src="@/assets/html-icon.svg"
                  alt="html"
                  class="img-fluid"
                />
              </div>
              <div class="col-6">
                <img src="@/assets/css-icon.svg" alt="css" class="img-fluid" />
              </div>
              <div class="col-6">
                <img src="@/assets/git-icon.svg" alt="git" class="img-fluid" />
              </div>
              <div class="col-6">
                <img
                  src="@/assets/javascript-icon.svg"
                  alt="javascript"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <div class="row g-4">
              <div class="col-6">
                <img
                  src="@/assets/bootstrap-icon.svg"
                  alt="bootstrap"
                  class="img-fluid"
                />
              </div>
              <div class="col-6">
                <img
                  src="@/assets/sass-icon.svg"
                  alt="sass"
                  class="img-fluid"
                />
              </div>
              <div class="col-6">
                <img
                  src="@/assets/react-icon.svg"
                  alt="react"
                  class="img-fluid"
                />
              </div>
              <div class="col-6">
                <img src="@/assets/vue-icon.svg" alt="vue" class="img-fluid" />
              </div>
              <div class="col-12">
                <img
                  src="@/assets/jquery-icon.svg"
                  alt="jquery"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </purple-bg>
</template>

<script>
import PurpleBg from "../ui/PurpleBg.vue";
export default {
  components: {
    PurpleBg,
  },
};
</script>