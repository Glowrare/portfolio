<template>
  <footer class="py-4">
    <container>
      <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div>
          <a class="logo-link d-block" href="#about" aria-label="Back to top" title="Back to top">
            <img src="@/assets/ajibolanle-logo-light-theme.png" alt="Logo" class="img-fluid logo" v-if="lightTheme" />
            <img src="@/assets/ajibolanle-logo-dark-theme.png" alt="Logo" class="img-fluid logo" v-else />
          </a>
        </div>
        <div class="socials">
          <a href="https://github.com/Glowrare" target="_blank" class="me-5" aria-label="Visit my Github page" title="Github"
            ><img src="@/assets/github-icon.svg" alt="Github"
          /></a>
          <a href="https://www.linkedin.com/in/ajibolanle/" target="_blank" aria-label="Visit my Linkedin profile" title="LinkedIn"
            ><img src="@/assets/linkedin-icon.svg" alt="LinkedIn"
          /></a>
        </div>
      </div>
      <div class="fs-3 text-muted text-center">Copyright {{ new Date().getFullYear() }}</div>
    </container>
  </footer>
</template>

<script>
export default {
  props: ['lightTheme'],
};
</script>

<style scoped>
footer {
  background: var(--brand-light);
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
  font-weight: 500;
}

footer .socials a img {
  transition: all 0.3s ease-in-out;
}
.darkmode footer .socials a img {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(126deg) brightness(105%) contrast(102%);
}
footer .socials a:hover img {
  transform: scale(0.8);
  filter: invert(87%) sepia(49%) saturate(364%) hue-rotate(354deg) brightness(95%) contrast(86%);
}

.logo-link {
  animation: rotate 2s ease-in-out infinite alternate;
}

@media screen and (max-width: 768px) {
  footer {
    margin-bottom: 40px;
  }
}
@keyframes rotate {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
