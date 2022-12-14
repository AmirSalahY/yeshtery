module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          src: './src',
          screens: './src/screens',
          constants: './src/constants',
        },
      },
    ],
  ],
};
