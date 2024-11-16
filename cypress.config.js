const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 1920,
  video: false,
  e2e: {
    watchForFileChanges: true,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
