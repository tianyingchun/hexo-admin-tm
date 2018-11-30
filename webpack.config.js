const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "src"),
  wwwPath: path.join(__dirname, "www")
};
const babelLoaderOpts = {
  cacheDirectory: true,
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        // or whatever your project requires
        useBuiltIns: "entry",
        targets: { browsers: 'last 2 versions' }
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'react-hot-loader/babel',
  ],
}
function cwdPathExtend(subpath) {
  return path.join(process.cwd(), subpath);
}
function wwwPathExtend(subpath) {
  return path.join(settings.wwwPath, subpath)
}

module.exports = (env, options) => {
  process.env.NODE_ENV = options.mode;
  const isDevMode = options.mode === "development";
  return {
    devtool: isDevMode ? "source-map" : false,
    stats: 'minimal',
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    output: {
      publicPath: '',
      filename: `[name]/bundle.js`,
      path: cwdPathExtend('dist'),
    },
    entry: {
      [`www`]: ["@babel/polyfill", "./src/index.tsx"],
    },
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, 'www'),
      compress: true,
      port: 9000,
      // proxy: {
      //   '/api': 'http://127.0.0.1:50545'
      // }
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            "style-loader",
            { loader: "css-loader", options: { sourceMap: isDevMode } },
            { loader: "postcss-loader", options: { plugins: [require("autoprefixer")()], sourceMap: isDevMode } },
            { loader: "less-loader", options: { sourceMap: isDevMode } }
          ]
        },
        { test: /\.tsx?$/, use: [{ loader: "babel-loader", options: babelLoaderOpts }] },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: { loader: "file-loader", options: { name: "fonts/[name].[ext]" } },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [{ loader: "file-loader", options: { outputPath: "assets/" } }]
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        "React": "react",
      }),
      new ForkTsCheckerWebpackPlugin(),
      new CleanWebpackPlugin([settings.distPath], {
        verbose: true
      }),
      new HtmlWebpackPlugin({
        template: wwwPathExtend("index.html")
      }),
    ]
  };
};