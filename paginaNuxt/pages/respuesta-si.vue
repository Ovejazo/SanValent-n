<template>
  <div class="container">
    <button @click="mostrarCorazones" class="button">Mostrar Corazones</button>
    <div class="corazones-container">
      <div v-for="(corazon, index) in corazones" 
           :key="index" 
           class="corazon-wrapper"
           :style="{ 
             left: corazon.left, 
             animationDelay: `${index * 0.2}s`,
             '--altura-maxima': corazon.altura,
             '--rotacion-inicial': corazon.rotationStart + 'deg',
             '--rotacion-final': corazon.rotationEnd + 'deg'
           }">
        <Heart />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Heart from '../components/Heart.vue'

const corazones = ref([])

const mostrarCorazones = () => {
  
  corazones.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    altura: `${50 + Math.random() * 30}vh`,
    rotationStart: Math.random() * 360,
    rotationEnd: 720 + Math.random() * 360
  }))

  // Limpiar los corazones después de que termine la animación
  setTimeout(() => {
    corazones.value = []
  }, 8000)
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}

.button {
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: #ff69b4;
  color: white;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  z-index: 2;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.95);
}

.corazones-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.corazon-wrapper {
  position: absolute;
  bottom: -100px;
  opacity: 0;
  animation: flotar 2s ease-in-out forwards;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
}

@keyframes flotar {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: scale(0.5) rotate(var(--rotacion-inicial));
  }
  20% {
    opacity: 1;
    transform: scale(1) rotate(calc(var(--rotacion-inicial) + 180deg));
  }
  50% {
    bottom: var(--altura-maxima);
    opacity: 1;
    transform: scale(1.2) rotate(calc(var(--rotacion-inicial) + 360deg));
  }
  80% {
    opacity: 1;
    transform: scale(1) rotate(calc(var(--rotacion-inicial) + 540deg));
  }
  100% {
    bottom: -100px;
    opacity: 0;
    transform: scale(0.5) rotate(var(--rotacion-final));
  }
}


:deep(.heart) {
  width: 30px;
  height: 30px;
  animation: none !important; 
  background-color: #ff1493;
}

:deep(.heart::before),
:deep(.heart::after) {
  width: 30px;
  height: 30px;
  background-color: #ff1493;
}

:deep(.heart) {
  filter: brightness(1.2);
  animation: brilloAleatorio 1s ease-in-out infinite alternate !important;
}

@keyframes brilloAleatorio {
  0% {
    filter: brightness(1) hue-rotate(0deg);
  }
  100% {
    filter: brightness(1.4) hue-rotate(45deg);
  }
}
</style>