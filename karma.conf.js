module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
      require("../src/main"),
    ],
    client: {
      clearContext: false, // conserve la vue des résultats de test
    },
    browsers: ["Chrome"], // Vous pouvez aussi essayer avec 'ChromeHeadless' si 'Chrome' pose problème
    singleRun: false, // Cela permet de garder Karma en exécution continue
    restartOnFileChange: true,
    reporters: ["progress", "kjhtml"],
    captureTimeout: 60000, // Augmentez le délai si nécessaire
    // Assurez-vous que le port est libre
    port: 9876,
    files: [{ pattern: "src/**/*.spec.ts", watched: false }],
  });
};
