// next.config.js

const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
module.exports = withImages(
  withSass({
    /* config options here */
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
  })
);

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });
// module.exports = withBundleAnalyzer({});
