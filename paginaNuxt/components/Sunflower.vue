<template>
  <div class="sunflower-wrapper">
    <div class="sunflower-container">
      <div class="stem">
        <div class="leaf left"></div>
        <div class="leaf right"></div>
      </div>
      <div class="flower">
        <div class="center"></div>
        <div class="petals">
          <div v-for="n in 12" :key="n" 
               class="petal"
               :style="{ transform: `rotate(${n * 30}deg)` }">
          </div>
        </div>
      </div>
    </div>
    <div class="text-block">
      <h1>Mi Girasol</h1>
      <h3>Hice este girasol pensando en ti, pensando en tus gustos y en tu carita linda hermosa.</h3>
    <NuxtLink to="/mensaje" class="link-button">
        Presiona aquí ^^
    </NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Aquí podríamos agregar lógica si es necesaria
</script>

<style scoped>
/* ... Mantenemos todos los estilos anteriores del girasol ... */
.sunflower-container {
  position: relative;
  height: 400px;
  width: 200px;
  display: flex;
  justify-content: center;
}

.stem {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 250px;
  background: #228B22;
  z-index: 1;
}

.leaf {
  position: absolute;
  width: 50px;
  height: 30px;
  background: #32CD32;
  border-radius: 50px 10px;
}

.leaf.left {
  transform: rotate(-30deg);
  left: -40px;
  top: 100px;
}

.leaf.right {
  transform: rotate(30deg);
  right: -40px;
  top: 150px;
}

.flower {
  position: absolute;
  top: 0;
  z-index: 2;
}

.center {
  width: 100px;
  height: 100px;
  background: #8B4513;
  border-radius: 50%;
  position: relative;
  z-index: 3;
  box-shadow: inset -10px -10px 15px rgba(0, 0, 0, 0.3);
}

.petals {
  position: absolute;
  top: 45%;
  left: 3%;
  transform: translate(-50%, -50%);
}

.petal {
  position: absolute;
  width: 160px;
  height: 60px;
  background: #FFD700;
  border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
  transform-origin: 0 center;
  left: 50px;
  top: -30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

/* Nuevos estilos para el wrapper y el bloque de texto */
.sunflower-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.text-block {
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

.text-block h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.8rem;
  font-weight: 600;
}

.text-block p {
  color: #34495e;
  line-height: 1.6;
  font-size: 1.1rem;
}

@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.sunflower-container {
  animation: sway 5s ease-in-out infinite;
  transform-origin: bottom center;
}
</style>