const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry:
  {

    main: "./src/index.js",
    vendors: "./src/vendors.js",
  },
  
  output: {
    path: path.resolve(__dirname, "publish"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator:{
          filename: 'img/[name].[hash].[ext]'
        }
      },
    ],
  },
};
