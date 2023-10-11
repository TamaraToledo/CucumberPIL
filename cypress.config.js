const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  env: {
    TAGS: "not @ignore",
    //Configuración de las URLs
    YVYTU_URL: "https://vientosdelaselva.com.ar/",
    EDEN_URL: "https://www.edenentradas.com.ar/",
    LIDER_URL: "https://farmaciaslider.com.ar/",
    STORE_URL: "https://automationteststore.com/",
    
    //Configuración de los usuarios // pisa los datos con el cypress.env.json
    users: [
      {
        user: "YYYYYYYYYYYYYYYYY",
        pass: "YYYYYYYYYYYYYYYY",
      },
    ],
  },
  e2e: {
    hideXHRInCommandLog: true,
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
     // require("cypress-image-diff-js/dist/plugin")(on, config);
      return config;
    },
  },
  //afecta a todos los test (pantalla, que los videos no se graben)
  viewportWith: 1536,
  viewportHeight: 960,
  video: false,
  retries: {
    openMode: 0,
    runMode: 0,
  },
  numTestsKeptInMemory: 0, // test con muchos datos en memoria
  defaultCommandTimeout: 80000, // tiempo de espera.
});