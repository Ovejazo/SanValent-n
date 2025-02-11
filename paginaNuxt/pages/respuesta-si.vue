<template>
  <div class="container">
    <button @click="handleButtonClick" class="button">Mostrar Osos</button>
    <div class="heart-container" ref="heartContainer"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import osoImage from '@/assets/images/oso.jpg' // Importa la imagen directamente

const heartContainer = ref(null)

const handleButtonClick = () => {
  createHearts()
}

const createHearts = () => {
  for (let i = 0; i < 1; i++) {
    const heartElement = document.createElement('img')
    heartElement.src = osoImage // Usa la imagen importada
    heartElement.alt = 'Oso' // Añade un atributo alt para accesibilidad
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
  height: 50px; /* Asegura que mantenga un tamaño cuadrado */
  object-fit: cover; /* Asegura que la imagen se recorte para ajustarse al contenedor */
  animation: float 10s ease-in infinite; /* Ajusta la duración de la animación */
}

@keyframes float {
  0% {
    transform: translateY(100vh);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>