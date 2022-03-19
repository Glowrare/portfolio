<template>
  <progress max="100" value="0"></progress>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  created() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 0.3 },
    });
  },
};
</script>

<style scoped>
progress {
  position: fixed;
  top: 0;
  left: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 15px;
  border: none;
  background: transparent;
}
progress::-webkit-progress-bar {
  background: transparent;
}
progress::-webkit-progress-value {
  background: linear-gradient(
    to left,
    #db38b5,
    #01b3e3,
    #25ce7b,
    #fdc741,
    #ff6b01,
    #fc4236
  );
  background-attachment: fixed;
}
progress::-moz-progress-bar {
  background: linear-gradient(
    to left,
    #db38b5,
    #01b3e3,
    #25ce7b,
    #fdc741,
    #ff6b01,
    #fc4236
  );
  background-attachment: fixed;
}
</style>