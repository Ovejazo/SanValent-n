<template>
  <div class="container">
    <div>
      <Sunflower />
    </div>
    <h1>Hola como estas</h1>
  </div>
</template>

<script setup>
import Sunflower from '@/components/Sunflower.vue'
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #87CEEB; /* Color de cielo */
}
</style>