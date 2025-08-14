const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const plugins = getPluginsByEnv(
    {
      production: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
      development: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
    },
    argv.mode
  );

  return {
    mode: argv.mode,
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // 기존 파일 제거
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".tsx", ".js", ".jsx"], // import 확장자 생략 허용
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins,
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      hot: true,
      port: 3000,
      historyApiFallback: true,
    },
  };
};

function getPluginsByEnv(
  plugins = {
    production: [],
    development: [],
  },
  env
) {
  return plugins[env];
}
