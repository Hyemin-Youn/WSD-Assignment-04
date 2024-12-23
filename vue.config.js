const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@config": path.resolve(__dirname, "src/config"),
      },
    },
  },
};
