/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

const options = require("./src/options.js");

module.exports = {
  ...options,
  build: {
    browsersync: {
      // open: true,
      port: "8080",
    },
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
    },
  },
};
