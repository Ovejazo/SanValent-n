<template>
  <div class="heart" :style="{ left: `${left}%`, animationDelay: `${animationDelay}s` }"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const left = ref(Math.random() * 100)
const animationDelay = ref(Math.random() * 2)

onMounted(() => {
  left.value = Math.random() * 100
  animationDelay.value = Math.random() * 2
})
</script>

<style scoped>
.heart {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 20px;
  background-color: red;
  transform: rotate(45deg);
  animation: float 4s ease-in infinite;
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}

.heart::before {
  top: -10px;
  left: 0;
}

.heart::after {
  top: 0;
  left: -10px;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(45deg);
    opacity: 0;
  }
}
</style>