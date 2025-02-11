<template>
  <div class="container">
    <button @click="mostrarOsos" class="button">Mostrar Osos</button>
    <div class="osos-container">
      <img v-for="(oso, index) in osos" 
           :key="index" 
           :src="osoImage" 
           class="oso" 
           :style="{ left: oso.left, animationDelay: `${index * 0.3}s` }"
           alt="Oso" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import osoImage from '@/assets/images/oso.jpg'

const osos = ref([])

const mostrarOsos = () => {
  // Crear 7 osos con posiciones horizontales aleatorias
  osos.value = Array.from({ length: 7 }, (_, i) => ({
    id: i,
    // Posición horizontal aleatoria entre 10% y 90% del ancho
    left: `${10 + Math.random() * 80}%`
  }))

  // Limpiar los osos después de que termine la animación
  setTimeout(() => {
    osos.value = []
  }, 3000) // 3 segundos (duración de animación + último delay)
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
}

.button:hover {
  background-color: #ff1493;
  transform: scale(1.05);
  transition: all 0.3s ease;
}

.osos-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.oso {
  position: absolute;
  bottom: -100px; /* Empieza desde abajo de la pantalla */
  width: 100px;
  height: 100px;
  object-fit: cover;
  opacity: 0;
  animation: flotar 0.75s ease-out forwards; /* Duración de la animación ajustada a 2 segundos */
  border-radius: 50%; /* Hace las imágenes redondas */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Añade una sombra suave */
}

@keyframes flotar {
  0% {
    bottom: -100px;
    opacity: 0;
    transform: scale(0.5);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    bottom: 50vh;
    opacity: 1;
    transform: scale(1);
  }
  100% {
    bottom: -100px;
    opacity: 0;
    transform: scale(0.5);
  }
}
</style>