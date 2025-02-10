<template>
  <div class="sun">
    <div class="rays"></div>
  </div>
</template>

<script setup>
// Aquí puedes agregar la lógica del componente si es necesaria
</script>

<style scoped>
.sun {
  width: 100px;
  height: 100px;
  background: #FFD700;
  border-radius: 50%;
  box-shadow: 0 0 50px #FFD700;
  position: relative;
  animation: glow 2s infinite alternate;
}

.rays {
  position: absolute;
  top: -20%;
  left: -20%;
  right: -20%;
  bottom: -20%;
  background: transparent;
  animation: spin 20s linear infinite;
}

.rays::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 45%, #FFD700 50%, transparent 55%),
              linear-gradient(0deg, transparent 45%, #FFD700 50%, transparent 55%),
              linear-gradient(45deg, transparent 45%, #FFD700 50%, transparent 55%),
              linear-gradient(-45deg, transparent 45%, #FFD700 50%, transparent 55%);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes glow {
  from {
    box-shadow: 0 0 50px #FFD700;
  }
  to {
    box-shadow: 0 0 70px #FFD700;
  }
}
</style>