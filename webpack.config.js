const webpackMerge = require('webpack-merge');

const loadPresets = require('./config/loadPresets');
const modeConfig = env => require(`./config/webpack.${env.mode}.js`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) =>
  webpackMerge(
    modeConfig({ mode }),
    loadPresets({ mode, presets })
  );