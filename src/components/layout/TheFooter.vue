<template>
  <footer class="py-4">
    <container>
      <div class="d-flex justify-content-between align-items-center">
        <div><span>Ajibolanle | Copyright 2022</span></div>
        <div>
          <a href="#" class="me-5"
            ><img src="@/assets/github-icon.svg" alt="Github"
          /></a>
          <a href="#"
            ><img src="@/assets/linkedin-icon.svg" alt="LinkedIn"
          /></a>
        </div>
      </div>
    </container>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--brand-light);
  font-size: 36px;
  font-size: clamp(24px, 2rem + 1vw, 36px);
  font-weight: 500;
}
</style>