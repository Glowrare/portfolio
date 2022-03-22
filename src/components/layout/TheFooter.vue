<template>
  <footer class="py-4">
    <container>
      <div class="d-flex justify-content-between align-items-center">
        <div><span>Ajibolanle | Copyright 2022</span></div>
        <div>
          <a href="https://github.com/Glowrare" target="_blank" class="me-5"
            ><img src="@/assets/github-icon.svg" alt="Github"
          /></a>
          <a href="https://www.linkedin.com/in/ajibolanle/"
            ><img src="@/assets/linkedin-icon.svg" alt="LinkedIn"
          /></a>
        </div>
      </div>
    </container>
  </footer>
</template>

<style scoped>
footer {
  background: var(--brand-light);
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
  font-weight: 500;
}

footer a img {
  transition: all 0.3s ease-in-out;
}
.darkmode footer a img {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(126deg)
    brightness(105%) contrast(102%);
}
footer a:hover img {
  transform: scale(0.8);
  filter: invert(87%) sepia(49%) saturate(364%) hue-rotate(354deg)
    brightness(95%) contrast(86%);
}
</style>