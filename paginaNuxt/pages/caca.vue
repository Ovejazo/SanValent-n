<template>
  <div class="caca-container" ref="cacaContainer">
    <h1>Caca</h1>
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
    <div class="heart-container" ref="heartContainer"></div> <!-- Asegúrate de que este div esté aquí -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Cambia esta URL a la del audio que quieras usar
const growlAudioURL = 'https://www.soundjay.com/animal/grizzly-bear-growl-01.mp3'
const growlAudio = new Audio(growlAudioURL)

const cacaContainer = ref(null)
const heartContainer = ref(null)

const handleNoClick = () => {
  growlAudio.play()
  cacaContainer.value.classList.add('shake')
  setTimeout(() => {
    cacaContainer.value.classList.remove('shake')
  }, 500)
}

const handleSiClick = () => {
  createHearts()
}

const createHearts = () => {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.style.left = `${Math.random() * 100}%`
    heart.style.animationDelay = `${Math.random() * 2}s`
    heartContainer.value.appendChild(heart)
  }

  setTimeout(() => {
    heartContainer.value.innerHTML = ''
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
  position: relative; /* Asegúrate de que el contenido tenga posición relativa */
  z-index: 1; /* Esto asegura que el contenido esté encima del contenedor de corazones */
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
}

.answer.yes {
  background-color: #28a745;
}

.answer.no {
  background-color: #dc3545;
  border: none;
  cursor: pointer;
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

.heart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0; /* Asegúrate de que el contenedor de corazones esté detrás del contenido */
}

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

.back-button {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background-color: #ff69b4;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}
</style>