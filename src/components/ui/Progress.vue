<template>
  <progress max="100" value="0"></progress>
</template>

<script>
import { gsap } from "../../gsap.js";

export default {
  mounted() {
    this.progress();
  },
  methods: {
    progress() {
      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 },
      });
    },
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
  height: 5px;
  border: none;
  background: transparent;
  z-index: 1000;
}
progress::-webkit-progress-bar {
  background: transparent;
}
progress::-webkit-progress-value {
  background: linear-gradient(
    180deg,
    #e2d784 0%,
    #711a75 47.92%,
    #e2d784 47.92%,
    rgba(24, 10, 10, 0.77) 100%
  );
  background-attachment: fixed;
}
progress::-moz-progress-bar {
  background: linear-gradient(
    180deg,
    #e2d784 0%,
    #711a75 47.92%,
    #e2d784 47.92%,
    rgba(24, 10, 10, 0.77) 100%
  );
  background-attachment: fixed;
}
</style>