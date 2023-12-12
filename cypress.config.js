const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "zgzuyf",
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900
})