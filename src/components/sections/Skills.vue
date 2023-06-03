<template>
  <purple-bg sectionId="skills">
    <h2 class="sec-header fade-from-left">What I know.</h2>
    <div class="skill-container">
      <div class="spin-border"></div>
      <ul class="skill-set">
        <SkillCard v-for="(skill, index) in skillSet" :key="index" :skill="skill" />
      </ul>
    </div>
  </purple-bg>
</template>

<script>
import PurpleBg from '../ui/PurpleBg.vue';
import SkillCard from '../ui/SkillCard.vue';
export default {
  data() {
    return {
      skillSet: [
        { title: '<HTML />', skillClass: 'c-html', tagline: 'Unleash your creativity, HTML is the canvas for web wonders!', label: 'HTML' },
        { title: '.CSS{}', skillClass: 'c-css', tagline: 'Design sorcery at your fingertips, CSS paints a stylish web.', label: 'CSS' },
        { title: 'JavaScript()', skillClass: 'c-js', tagline: 'Bringing websites to life.', label: 'JavaScript' },
        { title: 'git <cmd>', skillClass: 'c-git', tagline: 'Master version control like a maestro for flawless collaboration.', label: 'Git' },
        { title: '&.scss{}', skillClass: 'c-scss', tagline: 'Style with flair and ease with some sass.', label: 'SCSS/SASS' },
        { title: '<Vue />', skillClass: 'c-vue', tagline: 'Crafting beautiful and dynamic web experiences.', label: 'Vue.js' },
        { title: '{Bootstrap}', skillClass: 'c-boot', tagline: 'Fuelling responsive and stylish creations', label: 'Bootstrap' },
        { title: '<React />', skillClass: 'c-react', tagline: 'Unleash the building blocks of brilliance, React sparks UI wizardry.', label: 'React.js' },
        { title: '$(jQuery)', skillClass: 'c-jquery', tagline: 'Conjures captivating web experiences.', label: 'jQuery' },
      ],
    };
  },
  components: {
    PurpleBg,
    SkillCard,
  },
};
</script>

<style scoped>
.skill-container {
  position: relative;
  border-radius: 50%;
}
.spin-border {
  background: linear-gradient(90deg, rgba(226, 215, 132, 1) 0%, rgba(24, 10, 10, 1) 44%, rgba(245, 245, 245, 1) 100%);
  width: calc(50vw + 10px);
  height: calc(50vw + 10px);
  position: absolute;
  inset: 0;
  display: block;
  border-radius: 50%;
  margin: auto;
  animation: rotate 5s infinite linear;
}
.skill-set {
  list-style: none;
  margin: 100px auto 150px;
  padding: 0;
  background: var(--brand-dark);

  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  transform: rotate(0deg);
  position: relative;
}

.darkmode .skill-set {
  background: #2e2323;
}

@media screen and (max-width: 768px) {
  .skill-set {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    height: auto;
    border-radius: 0;
    transform: none;
    margin: 0;
    position: static;
    gap: 30px;
  }

  .spin-border {
    display: none;
  }
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(359deg);
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
