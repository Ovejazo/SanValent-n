<template>
  <div class="mensaje-container">
    <h1>¡Mensaje Especial! 💝</h1>
    <div class="mensaje-content">
      <p>Este es un mensaje muy especial...</p>
      <!-- Aquí puedes agregar el contenido que desees mostrar en la nueva página -->
    </div>
  </div>
</template>

<style scoped>
.mensaje-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffd6e6;
  padding: 2rem;
}

.mensaje-content {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  margin: 2rem;
}

h1 {
  color: #ff4d79;
  margin-bottom: 1rem;
}

p {
  color: #333;
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>