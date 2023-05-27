<template>
  <div class="fib-container" aria-label="Scrolling list of Fibinacci sequence from 0 to 6765">
    <div class="fib-wrapper" aria-hidden="true">
      <span v-for="(num, index) in fibSequence" :key="index">{{ num }}</span>
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
  padding: 20px 5px 0;
  position: fixed;
  top: 80px;
  bottom: 0;
  right: 0;
  overflow: hidden;
  pointer-events: none;
  user-select: none;
}
.fib-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  gap: 10px;

  -moz-animation: my-animation 30s linear infinite;
  -webkit-animation: my-animation 30s linear infinite;
  animation: my-animation 30s linear infinite;
}

@media screen and (max-width: 768px) {
  .fib-container {
    display: none;
  }
}

/* for Firefox */
@-moz-keyframes my-animation {
  from {
    -moz-transform: translateY(0%);
  }
  to {
    -moz-transform: translateY(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateY(0%);
  }
  to {
    -webkit-transform: translateY(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(1000%);
    transform: translateY(0%);
  }
  to {
    -moz-transform: translateY(-100%);
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}
</style>
