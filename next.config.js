// const DatePicker = require('react-date-picker');
// next.config.js
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const withTM = require('next-transpile-modules')(['react-date-picker']);
module.exports = withPlugins([
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
      },
    },
  ],
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
      },
      compress: true,
      poweredByHeader: false,
      env: {
        API: 'client-api.sushi-master.ru',
      },
    },
  ],
  withImages,
  [withTM],
]);

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});
