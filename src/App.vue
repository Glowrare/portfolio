<template>
  <Progress />
  <TheHeader />
  <main>
    <Welcome />
    <Skills />
    <Portfolio :projects="projects" />
    <Contact />
  </main>
  <TheFooter />
</template>

<script>
import Progress from "./components/ui/Progress.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import Welcome from "./components/sections/Welcome.vue";
import Skills from "./components/sections/Skills.vue";
import Portfolio from "./components/sections/Portfolio.vue";
import Contact from "./components/sections/Contact.vue";
import TheFooter from "./components/layout/TheFooter.vue";

import { gsap, ScrollTrigger } from "./gsap.js";

export default {
  name: "App",
  components: {
    Progress,
    TheHeader,
    Welcome,
    Skills,
    Portfolio,
    Contact,
    TheFooter,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Love Guage",
          image: "",
          desc: "Love Guage is a responsive web app to check love compatibility score for couples using Love Calculator API. With love guage, you can export the csv data for your previous checks in the history page.",
          langs: ["React"],
          links: [
            {
              type: "Live site",
              url: "http://love-guage.netlify.app/",
            },
            {
              type: "Repo",
              url: "https://github.com/Glowrare/love-guage",
            },
          ],
        },
        {
          id: 2,
          name: "Hero Finder",
          image: "",
          desc: "Search for superheroes and villains across various universe to generate a magazine cover and get details about their biography, powerstats, connections, appearnce and work.",
          langs: ["Vue", "Vuex"],
          links: [
            {
              type: "Live site",
              url: "http://love-guage.netlify.app/",
            },
            {
              type: "Repo",
              url: "https://github.com/Glowrare/love-guage",
            },
          ],
        },
        {
          id: 3,
          name: "Function Simulator",
          image: "",
          desc: "Function Simulator is open source project created to write custom vanilla JS function logic to mimic diverse JS methods.",
          langs: ["HTML", "CSS", "Javascript"],
          links: [
            {
              type: "Live site",
              url: "https://function-simulator.netlify.app/",
            },
            {
              type: "Repo",
              url: "https://github.com/Glowrare/Function-Simulator",
            },
          ],
        },
        {
          id: 4,
          name: "Tic tac Toe game",
          image: "",
          desc: "A fun multiplayer Tic Tac Toe Game with Vue.js. You get the option to pick the theme for your board.",
          langs: ["Vue"],
          links: [
            {
              type: "Live site",
              url: "https://funtictactoe.netlify.app/",
            },
            {
              type: "Repo",
              url: "https://github.com/Glowrare/Tic-Tac-Toe-Game",
            },
          ],
        },
        {
          id: 5,
          name: "Weather",
          image: "",
          desc: "Lorem Ipsum hjhkj",
          langs: ["Vue", "Vuex"],
          links: [
            {
              type: "Live site",
              url: "https://glowrare.github.io/Hero-FInder/",
            },
            {
              type: "Repo",
              url: "https://github.com/Glowrare/Hero-FInder",
            },
          ],
        },
      ],
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    this.layering();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    layering() {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
          gsap.utils.toArray("section").forEach((section) => {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              pin: true,
              pinSpacing: false,
            });
          });
        },
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap");

:root {
  --brand-dark-alt: #180a0a;
  --brand-dark: #711a75;
  --brand-light: #f5f5f5;
  --brand-light-alt: #e2d784;

  --theme-light: #f5f5f5;
  --theme-clr: #711a75;
}

/* @media (prefers-color-scheme: dark) {
  :root {
    --brand-dark-alt: #e2d784;
    --brand-dark: #f5f5f5;
    --brand-light: #180a0a;
  }
} */
.darkmode {
  --brand-dark-alt: #e2d784;
  --brand-dark: #f5f5f5;
  --brand-light: #180a0a;
}
html {
  font-size: 10px;
}
#app {
  font-family: "Khand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--brand-light);
  color: var(--brand-dark);
}
section {
  min-height: 100vh;
  background: var(--brand-light);
  padding-top: 100px;
}
.sec-header {
  font-weight: 600;
  font-size: 72px;
  font-size: clamp(48px, 4rem + 2.5vw, 72px);
}
</style>
