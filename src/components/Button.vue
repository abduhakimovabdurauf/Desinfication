<template>
  <button class="relative mx-4 overflow-hidden font-semibold text-white bg-blue-500 shadow rounded-3xl shine-button">
    <span class="relative z-10 text-xl">
      <slot/>
    </span>
    <span class="absolute inset-0 shine-effect"></span>
  </button>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@200..900&display=swap');
@keyframes shine {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

.shine-button {
  position: relative;
  overflow: hidden;
  font-family: "Unbounded";
}

.shine-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.6), transparent);
  animation: shine 3s infinite;
  animation-delay: 4s;
}
</style>
