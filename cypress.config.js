// cypress.config.js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,   // (se essa opção for realmente necessária)

  e2e: {
    baseUrl: 'http://127.0.0.1:5500/app',   // 👈 aqui está a baseUrl
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});