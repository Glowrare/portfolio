<template>
  <Progress />
  <TheHeader :lightTheme="lightTheme" :activeSection="activeSection" />
  <ThemeSwitch @changeTheme="changeTheme" :lightTheme="lightTheme" />
  <Sequence />
  <main>
    <Welcome :lightTheme="lightTheme" />
    <Skills />
    <Portfolio :projects="projects" />
    <Contact @submit-handler="submitHandler" :success="success" :loading="loading" />
  </main>
  <TheFooter :lightTheme="lightTheme" />
  <Dialog :success="success" ref="modalParent" />
</template>

<script>
import Progress from './components/ui/Progress.vue';
import TheHeader from './components/layout/TheHeader.vue';
import Welcome from './components/sections/Welcome.vue';
import Skills from './components/sections/Skills.vue';
import Portfolio from './components/sections/Portfolio.vue';
import Contact from './components/sections/Contact.vue';
import TheFooter from './components/layout/TheFooter.vue';
import ThemeSwitch from './components/switch/ThemeSwitch.vue';
import Dialog from './components/dialog/Dialog.vue';
import Sequence from './components/ui/Sequence.vue';

const FORMSPARK_ACTION_URL = 'https://submit-form.com/nA3zyAi1';

export default {
  name: 'App',
  components: {
    Progress,
    TheHeader,
    Welcome,
    Skills,
    Portfolio,
    Contact,
    TheFooter,
    ThemeSwitch,
    Dialog,
    Sequence,
  },
  data() {
    return {
      projects: [
        {
          id: 5,
          name: 'eCommerce Sites',
          image: '',
          desc: "A demo eCommerce shopping store where customers can browse a catalogue of store's inventory to select items to cart and checkout either as guest or registered users with a payment gateway (Paypal sandbox).",
          langs: ['React', 'Context API', 'Firebase'],
          links: [
            {
              type: 'Wazobia',
              url: 'https://wazobia-e-commerce.netlify.app/',
            },
            {
              type: 'T-Posh',
              url: 'https://tposh-fashion.vercel.app/',
            },
            {
              type: 'African Fashion ',
              url: 'https://tposh-african-fashion.vercel.app/',
            },
          ],
        },
        {
          id: 6,
          name: "Lori's Blog",
          image: '',
          desc: 'A simple food blog website template built with Next.js to indulge in delectable recipes and food tips.',
          langs: ['Next.js', 'MongoDB'],
          links: [
            {
              type: 'Live site',
              url: 'https://lori-blog.vercel.app/',
            },
            {
              type: 'Repo',
              url: 'https://github.com/Glowrare/lori-blog',
            },
          ],
        },
        {
          id: 3,
          name: 'Hero Finder',
          image: '',
          desc: 'Search for superheroes and villains across various universe to generate a downloadable magazine cover and get details about their biography, powerstats, connections, appearance & work.',
          langs: ['Vue', 'Vuex'],
          links: [
            {
              type: 'Live site',
              url: 'https://glowrare.github.io/Hero-FInder/',
            },
            {
              type: 'Repo',
              url: 'https://github.com/Glowrare/Hero-FInder',
            },
          ],
        },
        {
          id: 2,
          name: 'Function Simulator',
          image: '',
          desc: 'Function Simulator is open source project created to write custom vanilla JS function logic to mimic diverse JS methods.',
          langs: ['HTML', 'CSS', 'JS'],
          links: [
            {
              type: 'Live site',
              url: 'https://function-simulator.netlify.app/',
            },
            {
              type: 'Repo',
              url: 'https://github.com/Glowrare/Function-Simulator',
            },
          ],
        },
        {
          id: 1,
          name: 'Tic tac Toe game',
          image: '',
          desc: 'A fun multiplayer Tic Tac Toe Game with Vue.js. You get the option to pick the theme for your board.',
          langs: ['Vue'],
          links: [
            {
              type: 'Live site',
              url: 'https://funtictactoe.netlify.app/',
            },
            {
              type: 'Repo',
              url: 'https://github.com/Glowrare/Tic-Tac-Toe-Game',
            },
          ],
        },
        {
          id: 4,
          name: 'Love Guage',
          image: '',
          desc: 'Love Guage is a responsive web app to check love compatibility score for couples using Love Calculator API. With love guage, you can export the csv data for your previous checks in the history page.',
          langs: ['React'],
          links: [
            {
              type: 'Live site',
              url: 'https://love-guage.netlify.app/',
            },
            {
              type: 'Repo',
              url: 'https://github.com/Glowrare/love-guage',
            },
          ],
        },
      ],
      lightTheme: true,
      activeSection: '',
      active: false,
      show: false,
      success: null,
      loading: false,
    };
  },
  mounted() {
    document.title = 'I am Ajibolanle - Welcome to my personal site';

    const sections = document.querySelectorAll('section');

    const options = {
      root: null,
      threshold: 0,
      rootMargin: '-50px',
    };

    const appData = this; // Store a reference to the parent component's "this"

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation');
          appData.activeSection = entry.target.id;
        } else {
          entry.target.classList.remove('animation');
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  },
  created() {
    let darkMode = localStorage.getItem('darkMode');
    const defaultDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((darkMode === null && defaultDarkMode) || darkMode === 'enabled') {
      this.lightTheme = false;
    }
  },
  watch: {
    lightTheme(newVal) {
      const app = document.getElementById('app');
      if (!newVal) {
        app.classList.add('darkmode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        app.classList.remove('darkmode');
        localStorage.setItem('darkMode', 'disabled');
      }
    },
  },
  methods: {
    changeTheme() {
      this.lightTheme = !this.lightTheme;
    },
    async submitHandler({ name, email, message }) {
      this.loading = true;
      this.success = false;
      const response = await fetch(FORMSPARK_ACTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      this.loading = false;

      if (response.ok) {
        this.success = true;
        this.$refs.modalParent.showModal();
      } else this.success = false;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap');

:root {
  --brand-dark-alt: #180a0a;
  --brand-dark: #711a75;
  --brand-light: #f5f5f5;
  --brand-light-alt: #e2d784;

  --theme-light: #f5f5f5;
  --theme-clr: #711a75;

  --overlay-bg: #701a7594;
}
.darkmode {
  --brand-dark-alt: #e2d784;
  --brand-dark: #f5f5f5;
  --brand-light: #180a0a;

  --overlay-bg: #f5f5f57a;
}
html {
  font-size: 10px;
}
body.modal-open {
  overflow: hidden;
}
#app {
  font-family: 'Khand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--brand-light);
  color: var(--brand-dark);
}
section {
  min-height: 100vh;
  background: var(--brand-light);
  padding-top: 100px;
  padding-bottom: 50px;
}
.sec-header {
  font-weight: 600;
  font-size: 72px;
  font-size: clamp(48px, 4rem + 2.5vw, 72px);
  position: relative;
}
section.animation .fade-in,
section.animation .fade-from-top,
section.animation .fade-from-bottom,
section.animation .fade-from-left,
section.animation .fade-from-right {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}
section.animation .fade-in {
  animation-name: fade-in;
}
section.animation .fade-from-top {
  animation-name: fade-from-top;
}
section.animation .fade-from-bottom {
  animation-name: fade-from-bottom;
}
section.animation .fade-from-left {
  animation-name: fade-from-left;
}
section.animation .fade-from-right {
  animation-name: fade-from-right;
}
@media only screen and (max-width: 768px) {
  .vueperslides__arrow {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-from-bottom {
  0% {
    bottom: -50px;
  }
  100% {
    bottom: 0;
  }
}
@keyframes fade-from-top {
  0% {
    top: -50px;
  }
  100% {
    top: 0;
  }
}
@keyframes fade-from-left {
  0% {
    left: -100px;
  }
  100% {
    left: 0;
  }
}
@keyframes fade-from-right {
  0% {
    right: -100px;
  }
  100% {
    right: 0;
  }
}
</style>
