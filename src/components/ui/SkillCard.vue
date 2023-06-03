<template>
  <li class="skill-item" :class="skill.skillClass" tabindex="0" :title="skill.label">
    <div class="skill-item-container">
      <div class="skill-item-front">
        <h3>{{ skill.title }}</h3>
      </div>
      <div class="skill-item-back">{{ skill.tagline }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['skill'],
};
</script>

<style scoped>
.skill-item {
  background: transparent;
  color: var(--brand-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -8%;
  perspective: 1000px;
}
.skill-item-container {
  background: var(--brand-light);
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.7);
  backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  border-radius: inherit;
}
.darkmode .skill-item-container {
  box-shadow: 0 4px 8px 0 var(--brand-light-alt);
}
.skill-item:hover .skill-item-container,
.skill-item:focus .skill-item-container {
  transform: rotateY(180deg);
}

.skill-item:hover .skill-item-container .skill-item-back,
.skill-item:focus .skill-item-container .skill-item-back {
  z-index: 2;
}

.skill-item-front {
  z-index: 2;
}
.skill-item-back {
  z-index: 1;
  transform: rotateY(180deg);
  padding: 10px;
  font-size: 1.6rem;
  transition: z-index 0.6s;
}
.skill-item-front,
.skill-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--brand-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
}
.skill-item.c-vue {
  transform: translate(23vw);
}
.skill-item.c-scss {
  transform: rotate(40deg) translate(22vw) rotate(-40deg);
}
.skill-item.c-git {
  transform: rotate(calc(40deg * 2)) translate(22vw) rotate(calc(-40deg * 2));
}
.skill-item.c-jquery {
  transform: rotate(calc(40deg * 3)) translate(25vw) rotate(calc(-40deg * 3));
}
.skill-item.c-react {
  transform: rotate(calc(40deg * 4)) translate(27vw) rotate(calc(-40deg * 4));
}
.skill-item.c-css {
  transform: rotate(calc(40deg * 5)) translate(27vw) rotate(calc(-40deg * 5));
}
.skill-item.c-html {
  transform: rotate(calc(40deg * 6)) translate(27vw) rotate(calc(-40deg * 6));
}
.skill-item.c-js {
  transform: rotate(calc(40deg * 7)) translate(25vw) rotate(calc(-40deg * 7));
}
.skill-item.c-boot {
  transform: rotate(calc(40deg * 8)) translate(25vw) rotate(calc(-40deg * 8));
}

.skill-item h3 {
  font-size: 3rem;
  font-weight: 700;
}

@media screen and (max-width: 768px) {
  .skill-item {
    transform: none !important;
    position: static;
    margin: 0;
    flex-grow: 1;
    border-radius: 0;
  }

  .skill-item-container {
    max-height: 150px;
    max-width: 150px;
    border-radius: 100%;
  }
}
</style>
