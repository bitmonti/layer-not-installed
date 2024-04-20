export default defineNuxtConfig({
  devtools: { enabled: false },
  extends: ['../layer-with-dependencies', { install: true }],
});
