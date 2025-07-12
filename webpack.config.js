const path = require("path");

module.exports = [
  {
    name: "client",
    entry: path.resolve(__dirname, "src/client/index.tsx"),
    mode: "production",
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: { transpileOnly: true },
        },
      ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
      filename: "client.js",
      path: path.resolve(__dirname, "dist/static"),
      publicPath: "/static/",
    },
  },
  {
    name: "server",
    entry: path.resolve(__dirname, "src/server/index.tsx"),
    mode: "production",
    target: "node",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: { transpileOnly: true },
        },
      ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2",
    },
    externalsPresets: { node: true },
  },
];
