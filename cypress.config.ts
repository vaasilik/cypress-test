import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages/",
    retries: {
      openMode: 1,
      runMode: 0,
    },
    watchForFileChanges: false,
  defaultCommandTimeout: 1000,
  pageLoadTimeout: 30000,
  screenshotsFolder: "cypress/screenshots",
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: false,
  viewportHeight: 1080, // Висоту вьюпорта Full HD
  viewportWidth: 1920,  // Широта вьюпорта Full HD
  video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
