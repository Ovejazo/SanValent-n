// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Habilitar explícitamente las páginas
  experimental: {
    payloadExtraction: false
  },

  // Asegurarnos que el router está habilitado
  router: {
    options: {
      strict: false
    }
  },

  compatibilityDate: "2025-02-10"
})