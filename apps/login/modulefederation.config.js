const { dependencies } = require('./package.json');

module.exports = {
  name: 'login',
  exposes: {
    './Login': './src/pages/Login'
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};