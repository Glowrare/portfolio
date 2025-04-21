<template>
  <purple-bg sectionId="skills">
    <h2 class="sec-header fade-from-left">What I know.</h2>
    <div class="skill-container">
      <ul class="skill-set">
        <SkillCard
          v-for="(skill, index) in skillSet"
          :key="index"
          :skill="skill"
        />
      </ul>
    </div>
  </purple-bg>
</template>

<script>
import PurpleBg from "../ui/PurpleBg.vue";
import SkillCard from "../ui/SkillCard.vue";
export default {
  data() {
    return {
      skillSet: [
        {
          title: "<HTML />",
          skillClass: "c-html",
          tagline:
            "Unleash your creativity, HTML is the canvas for web wonders!",
          label: "HTML",
        },
        {
          title: ".CSS{}",
          skillClass: "c-css",
          tagline:
            "Design sorcery at your fingertips, CSS paints a stylish web.",
          label: "CSS",
        },
        {
          title: "JavaScript()",
          skillClass: "c-js",
          tagline: "Bringing websites to life.",
          label: "JavaScript",
        },
        {
          title: ":typeScript;",
          skillClass: "c-ts",
          tagline: "Typed safety meets JavaScript power.",
          label: "TypeScript",
        },
        {
          title: "<React />",
          skillClass: "c-react",
          tagline:
            "Unleash the building blocks of brilliance, React sparks UI wizardry.",
          label: "React.js",
        },
        {
          title: "<Next.js />",
          skillClass: "c-next",
          tagline: "Fueling modern web apps with server-side brilliance.",
          label: "Next.js",
        },
        {
          title: ".tailwind{}",
          skillClass: "c-tailwind",
          tagline: "Utility-first CSS for rapid UI development.",
          label: "Tailwind CSS",
        },
        {
          title: "<Vue />",
          skillClass: "c-vue",
          tagline: "Crafting beautiful and dynamic web experiences.",
          label: "Vue.js",
        },
        {
          title: "&.scss{}",
          skillClass: "c-scss",
          tagline: "Style with flair and ease with some sass.",
          label: "SCSS/SASS",
        },
        {
          title: "{Bootstrap}",
          skillClass: "c-boot",
          tagline: "Fuelling responsive and stylish creations",
          label: "Bootstrap",
        },
        {
          title: "[Figma]",
          skillClass: "c-figma",
          tagline:
            "Design and collaborate in the cloud with pixel-perfect precision.",
          label: "Figma",
        },
        {
          title: "Ember.run()",
          skillClass: "c-ember",
          tagline:
            "Convention over configuration, Ember keeps it powerful and productive.",
          label: "Ember.js",
        },
        {
          title: "$(jQuery)",
          skillClass: "c-jquery",
          tagline: "Conjures captivating web experiences.",
          label: "jQuery",
        },
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
}
.skill-set {
  list-style: none;
  padding: 0;
  background: var(--brand-dark);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.darkmode .skill-set {
  background: #2e2323;
}

@media screen and (max-width: 1024px) {
  .skill-set {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .skill-set {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 480px) {
  .skill-set {
    grid-template-columns: 1fr;
  }
}
</style>
