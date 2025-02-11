<template>
  <div class="caca-container" ref="cacaContainer">
    <h1>Página Caca</h1>
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
    <div class="caca-content">
      <img src="/images/oso.jpg" alt="Oso" class="oso-image" />
      <p class="question">¿Quieres ser mi San Valentín?</p>
      <div class="answers">
        <button @click="handleSiClick" class="answer yes">Sí</button>
        <button @click="handleNoClick" class="answer no">No</button>
      </div>
    </div>
    <NuxtLink to="/" class="back-button">
      Volver a inicio
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Heart from '~/components/Heart.vue'

const cacaContainer = ref(null)
const corazones = ref([])

const handleNoClick = () => {
  cacaContainer.value.classList.add('shake')
  setTimeout(() => {
    cacaContainer.value.classList.remove('shake')
  }, 500)
}

const handleSiClick = () => {
  mostrarCorazones()
}

const mostrarCorazones = () => {
  // Crear 10 corazones con posiciones, rotaciones y alturas aleatorias
  corazones.value = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${10 + Math.random() * 80}%`,
    altura: `${50 + Math.random() * 30}vh`,
    rotationStart: Math.random() * 360,
    rotationEnd: 720 + Math.random() * 360
  }))

  // Limpiar los corazones después de que termine la animación
  setTimeout(() => {
    corazones.value = []
  }, 4000)
}

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.caca-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffd6e6;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.caca-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem;
  position: relative;
  z-index: 1;
}

.oso-image {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
}

.question {
  color: #ff4d79;
  font-size: 1.5rem;
  margin: 1.5rem 0;
}

.answers {
  display: flex;
  justify-content: space-around;
}

.answer {
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.answer.yes {
  background-color: #28a745;
}

.answer.no {
  background-color: #dc3545;
}

.answer:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.answer:active {
  transform: scale(0.98);
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

.corazones-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.corazon-wrapper {
  position: absolute;
  bottom: -100px;
  opacity: 0;
  animation: flotar 3s ease-in-out forwards;
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

.back-button {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #ff69b4;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  z-index: 1;
}

.back-button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}

.link-button {
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.link-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>