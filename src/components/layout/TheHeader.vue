<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container justify-content-between">
      <a class="navbar-brand logo-link" href="#about">
        <img
          src="@/assets/ajibolanle-logo-light-theme.png"
          alt=""
          class="img-fluid logo"
        />
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
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 menu-items">
          <li class="nav-item">
            <a class="nav-link active" href="#about">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  background: var(--brand-light);
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  /* overflow: hidden; */
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
}
.navbar .menu-items li a:hover,
.navbar .menu-items li a.active {
  color: var(--brand-dark);
  text-decoration: underline;
}

@media screen and (max-width: 992px) {
}
</style>