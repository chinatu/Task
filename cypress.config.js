const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    taskUrl: "http://the-internet.herokuapp.com/status_codes"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
