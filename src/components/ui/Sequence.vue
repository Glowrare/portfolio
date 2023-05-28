<template>
  <div class="fib-container" aria-hidden="true">
    <div class="fib-wrapper">
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
  border-left: 4px solid var(--brand-light-alt);
}
.fib-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  text-align: center;
  gap: 20px;

  -moz-animation: top-down-scroll 15s alternate infinite;
  -webkit-animation: top-down-scroll 15s alternate infinite;
  animation: top-down-scroll 15s alternate infinite;
}

@media screen and (max-width: 768px) {
  .fib-container {
    border: none;
    border-top: 4px solid var(--brand-light-alt);
    top: auto;
    left: 0;
    z-index: 5;
    padding-top: 5px;
  }

  .fib-wrapper {
    flex-direction: row;

    -moz-animation: left-right-scroll 15s alternate infinite;
    -webkit-animation: left-right-scroll 15s alternate infinite;
    animation: left-right-scroll 15s alternate infinite;
  }
}

@-moz-keyframes top-down-scroll {
  from {
    -moz-transform: translate(0, 25%);
  }
  to {
    -moz-transform: translate(0, -25%);
  }
}

@-webkit-keyframes top-down-scroll {
  from {
    -webkit-transform: translate(0, 25%);
  }
  to {
    -webkit-transform: translate(0, -25%);
  }
}

@keyframes top-down-scroll {
  from {
    -moz-transform: translate(0, 25%);
    -webkit-transform: translate(0, 25%);
    transform: translate(0, 25%);
  }
  to {
    -moz-transform: translate(0, -25%);
    -webkit-transform: translate(0, -25%);
    transform: translate(0, -25%);
  }
}

@-moz-keyframes left-right-scroll {
  from {
    -moz-transform: translate(0, 100%);
  }
  to {
    -moz-transform: translate(0, -100%);
  }
}

@-webkit-keyframes left-right-scroll {
  from {
    -webkit-transform: translate(100%, 0);
  }
  to {
    -webkit-transform: translate(-100%, 0);
  }
}

@keyframes left-right-scroll {
  from {
    -moz-transform: translate(100%, 0);
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  to {
    -moz-transform: translate(-100%, 0);
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
}
</style>
