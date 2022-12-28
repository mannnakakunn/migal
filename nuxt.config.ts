// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ['@nuxt/content','@nuxtjs/supabase'],
  content: {
    documentDriven: {
      layoutFallbacks: ['theme'],
    }
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  }
})
