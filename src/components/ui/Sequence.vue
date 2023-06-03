<template>
  <div class="fib-container" aria-hidden="true">
    <div class="fib-wrapper">
      <span v-for="(num, index) in fibSequence" :key="index" :class="{ marked: index === Math.floor(fibSequence.length / 2) }">{{ num }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fibSequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765],
    };
  },
};
</script>

<style scoped>
.fib-container {
  background: var(--brand-light);
  color: var(--brand-dark);
  max-width: fit-content;
  padding: 20px 0 0;
  position: fixed;
  top: 80px;
  bottom: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
  border-left: 4px solid var(--brand-light-alt);
  display: flex;
  justify-content: center;
  align-items: center;
}
.fib-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  gap: 20px;
}

.fib-wrapper > * {
  padding: 0 3px;
}

.marked {
  border: solid 4px var(--brand-light-alt);
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-width: 0;
}

@media screen and (max-width: 768px) {
  .fib-container {
    border: none;
    border-top: 4px solid var(--brand-light-alt);
    top: auto;
    left: 0;
    z-index: 5;
    padding-top: 0;
    align-items: center;
  }

  .fib-wrapper {
    flex-direction: row;
  }
  .marked {
    border-top-width: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left-width: 4px;
  }
}
</style>
