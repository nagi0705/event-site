export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    static: true
  },
  css: ['@/assets/css/tailwind.css'],
});