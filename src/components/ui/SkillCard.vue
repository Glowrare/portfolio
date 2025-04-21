<template>
  <li
    class="skill-item"
    :class="skill.skillClass"
    tabindex="0"
    :title="skill.label"
  >
    <div class="skill-item-container">
      <div class="skill-item-front">
        <h3>{{ skill.title }}</h3>
        <div
          class="flip"
          :aria-label="`Hover or click to flip ${skill.label} skill card`"
        >
          Hover to Flip
        </div>
      </div>
      <div class="skill-item-back">{{ skill.tagline }}</div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["skill"],
};
</script>

<style scoped>
.skill-item {
  background: transparent;
  color: var(--brand-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 150px;
  cursor: pointer;
}
.skill-item-container {
  background: var(--brand-light);
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 1px 4px 0 rgba(255, 255, 255, 0.7);
}
.darkmode .skill-item-container {
  box-shadow: 0 1px 4px 0 var(--brand-light-alt);
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
  position: relative;
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
.skill-item h3 {
  font-size: 3rem;
  font-weight: 700;
}
.flip {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 5px;
  background: var(--brand-dark);
  color: var(--brand-light);
  text-transform: uppercase;
  font-size: 1.5rem;
}
</style>
