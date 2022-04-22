const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    preferRelative: true,
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
      api: path.resolve(__dirname, '..', 'src/api'),
      types: path.resolve(__dirname, '..', 'src/types'),
      enums: path.resolve(__dirname, '..', 'src/enums'),
      hooks: path.resolve(__dirname, '..', 'src/hooks'),
      utils: path.resolve(__dirname, '..', 'src/utils'),
      assets: path.resolve(__dirname, '..', 'src/assets'),
      styles: path.resolve(__dirname, '..', 'src/styles'),
      components: path.resolve(__dirname, '..', 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
        exclude: /\.module\.css$/,
      },
      // Loading SCSS/SASS
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
        exclude: /\.module\.scss$/,
      },
      // Loading CSS modules
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      // Loading SCSS modules
      {
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
        include: /\.module\.scss$/,
      },
      // Loading images
      {
        test: /\.jpe?g$|\.gif$|\.png|\.ico|\.svg$/,
        use: ['file-loader'],
      },
      // Loading fonts
      {
        test: /\.(ttf|eot|woff|svg|woff2)$/,
        loader: 'file-loader',
      },
      // Babel TS
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', './public/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'src/assets/images'),
          to: path.resolve(__dirname, '..', 'build'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin(),
  ],
};
