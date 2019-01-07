const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: "./src/main.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".jx", ".json"],
    alias: {
      "@": resolve("src"),
      util: resolve("src/util"),
      co: resolve("src/components")
    }
  },

  plugins: [
    new webpack.HashedModuleIdsPlugin(),

    new CopyWebpackPlugin([{ from: "src/images", to: "images" }]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
