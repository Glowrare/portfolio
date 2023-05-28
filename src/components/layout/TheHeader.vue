<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container justify-content-between">
      <a class="navbar-brand logo-link" href="#about" aria-label="Go to Top section">
        <img src="@/assets/ajibolanle-logo-light-theme.png" alt="Logo" class="img-fluid logo" v-if="lightTheme" />
        <img src="@/assets/ajibolanle-logo-dark-theme.png" alt="Logo" class="img-fluid logo" v-else />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#pageNavigation"
        aria-controls="pageNavigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="pageNavigation">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pageNavigation"
          aria-controls="pageNavigation"
          aria-expanded="false"
          aria-label="Close navigation"
          ref="closeNav"
        >
          <span class="navbar-toggler-icon navbar-close-icon"></span>
        </button>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 menu-items">
          <li :class="['nav-item', { active: activeSection === 'about' }]">
            <a class="nav-link" href="#about" @click="closeNav">Home</a>
          </li>
          <li :class="['nav-item', { active: activeSection === 'skills' }]">
            <a class="nav-link" href="#skills" @click="closeNav">Skills</a>
          </li>
          <li :class="['nav-item', { active: activeSection === 'portfolio' }]">
            <a class="nav-link" href="#portfolio" @click="closeNav">Portfolio</a>
          </li>
          <li :class="['nav-item', { active: activeSection === 'contact' }]">
            <a class="nav-link" href="#contact" @click="closeNav">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['lightTheme', 'activeSection'],
  methods: {
    closeNav() {
      if (window.innerWidth <= 992) this.$refs.closeNav.click();
    },
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  background: var(--brand-light);
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  z-index: 99;
  font-size: 2.4rem;
}
.logo-link {
  animation: rotate 2s ease-in-out infinite alternate;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(25deg);
  }
}
.logo {
  height: 60px;
}
.navbar .menu-items li a {
  color: var(--brand-dark);
  font-weight: 500;
  background: linear-gradient(currentcolor, currentcolor) left 100%/100% 1px no-repeat transparent;
  background-position: right 100%;
  background-size: 0 1px;
  transition: background-size 0.5s ease-in-out 0s;
}
.navbar .menu-items li.active a,
.navbar .menu-items li a:focus,
.navbar .menu-items li a:hover {
  color: var(--brand-dark);
  background-size: 100% 1px;
  background-position: left 100%;
}
.navbar .navbar-toggler {
  border: none;
}
.navbar .navbar-toggler:focus {
  box-shadow: none;
}
.navbar-toggler-icon {
  background-image: url('~@/assets/nav-toggle.svg');
  width: 30px;
  height: 30px;
}
.darkmode .navbar-toggler-icon:not(.navbar-close-icon) {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(126deg) brightness(105%) contrast(102%);
}
.navbar-toggler-icon.navbar-close-icon {
  background-image: url('~@/assets/nav-close.svg');
}
@media screen and (max-width: 992px) {
  .navbar-collapse {
    background: #711a75;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 20px 30px;
    box-shadow: rgba(255, 255, 255, 0.25) 0px 10px 4px;
  }
  .darkmode .navbar-collapse {
    background: #000000;
  }
  .navbar-collapse::before {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    background: var(--overlay-bg);
    z-index: -1;
  }
  .navbar .menu-items li a {
    color: #ffffff;
    font-weight: 500;
    display: inline-block;
  }
  .navbar .menu-items li.active a,
  .navbar .menu-items li a:focus,
  .navbar .menu-items li a:hover {
    color: var(--theme-light);
    /* text-decoration: underline; */
  }
}
</style>
