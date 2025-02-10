<template>
  <div class="caca-container">
    <h1>Página Caca</h1>
    <div class="caca-content">
        <p class="question">¿Quieres ser mi San Valentín?</p>
      <img src="/images/oso.jpg" alt="Oso" class="oso-image" />
      <div class="answers">
        <NuxtLink to="/respuesta-si" class="answer yes">Sí</NuxtLink>
        <NuxtLink to="/respuesta-no" class="answer no">No</NuxtLink>
      </div>
    </div>
    <NuxtLink to="/" class="back-button">
      Volver a inicio
    </NuxtLink>
  </div>
</template>

<script setup>
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
}

.caca-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem;
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
}

.answer:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.answer:active {
  transform: scale(0.98);
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