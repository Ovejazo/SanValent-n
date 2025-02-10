<template>
  <div class="sunflower-container">
    <div class="stem">
      <div class="leaf left"></div>
      <div class="leaf right"></div>
    </div>
    <div class="flower">
      <div class="center"></div>
      <!-- Pétalos -->
      <div class="petals">
        <div v-for="n in 12" :key="n" 
             class="petal"
             :style="{ transform: `rotate(${n * 30}deg)` }">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Aquí podríamos agregar lógica si es necesaria
</script>

<style scoped>
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
  top: 40%;
  left: 5%;
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

/* Animación suave del girasol */
@keyframes sway {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

.sunflower-container {
  animation: sway 5s ease-in-out infinite;
  transform-origin: bottom center;
}
</style>