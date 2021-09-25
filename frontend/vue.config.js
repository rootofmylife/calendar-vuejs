const path = require("path");

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@src": path.resolve(__dirname, "src"),
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Simple Calendar";
      return args;
    });
  },
};
