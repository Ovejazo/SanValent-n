<template>
  <div class="container">
    <button @click="handleButtonClick" class="button">Mostrar Osos</button>
    <div class="heart-container" ref="heartContainer"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const heartContainer = ref(null)

const handleButtonClick = () => {
  createHearts()
}

const createHearts = () => {
  for (let i = 0; i < 30; i++) {
    const heartElement = document.createElement('img')
    heartElement.src = '/images/oso.jpg' // Asegúrate de que la ruta sea correcta
    heartElement.classList.add('heart')
    heartElement.style.left = `${Math.random() * 100}%`
    heartElement.style.animationDelay = `${Math.random() * 2}s`
    heartContainer.value.appendChild(heartElement)
  }

  setTimeout(() => {
    heartContainer.value.innerHTML = ''
  }, 4000)
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
  position: relative;
  overflow: hidden;
}

.button {
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  background-color: #ff69b4;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.98);
}

.heart-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.heart {
  position: absolute;
  bottom: 0;
  width: 50px; /* Ajusta el tamaño según sea necesario */
  height: auto; /* Mantén la proporción de la imagen */
  animation: float 4s ease-in infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>