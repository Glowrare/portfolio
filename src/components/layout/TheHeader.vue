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
            <a class="nav-link active" href="#about" ref="about">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills" ref="skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portfolio" ref="portfolio">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" ref="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { gsap } from "../../gsap.js";
export default {
  mounted() {
    this.navHandler();
  },
  methods: {
    navHandler() {
      // let panelsSection = document.querySelector("#panels"),
      const panels = gsap.utils.toArray("main section");
      let panelsContainer = document.querySelector("main"),
        tween;
      document.querySelectorAll(".nav-link").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          let targetElem = document.querySelector(
              e.target.getAttribute("href")
            ),
            y = targetElem;
          if (
            targetElem &&
            panelsContainer.isSameNode(targetElem.parentElement)
          ) {
            let totalScroll =
                tween.scrollTrigger.end - tween.scrollTrigger.start,
              totalMovement = (panels.length - 1) * targetElem.offsetWidth;
            y = Math.round(
              tween.scrollTrigger.start +
                (targetElem.offsetLeft / totalMovement) * totalScroll
            );
          }
          gsap.to(window, {
            scrollTo: {
              y: y,
              autoKill: false,
            },
            duration: 1,
          });
        });
      });
      //   gsap.utils.toArray("nav .nav-link").forEach(function (a) {
      //     a.addEventListener("click", function (e) {
      //       e.preventDefault();
      //       gsap.to(window, {
      //         duration: 1,
      //         scrollTo: e.target.getAttribute("href"),
      //       });
      //     });
      //   });
      // },
      // },
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