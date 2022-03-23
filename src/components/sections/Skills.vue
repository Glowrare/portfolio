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
// import Humaans from "../../assets/humaans.svg";
// import HTMLLogo from "../../assets/html-icon.svg";
// import CSSLogo from "../../assets/css-icon.svg";
// import JavascriptLogo from "../../assets/javascript-icon.svg";
// import GitLogo from "../../assets/git-icon.svg";
// import BootstrapLogo from "../../assets/bootstrap-icon.svg";
// import SassLogo from "../../assets/sass-icon.svg";
// import ReactLogo from "../../assets/react-icon.svg";
// import VueLogo from "../../assets/vue-icon.svg";
// import JQueryLogo from "../../assets/jquery-icon.svg";
export default {
  components: {
    PurpleBg,
    // Humaans,
    // HTMLLogo,
    // CSSLogo,
    // JavascriptLogo,
    // GitLogo,
    // BootstrapLogo,
    // SassLogo,
    // ReactLogo,
    // VueLogo,
    // JQueryLogo,
  },
};
</script>