module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      browsers: 'defaults',
      autoprefixer: {
        flexbox: 'no-2009',
        grid: true,
      },
      stage: 2,
      features: {
        'custom-properties': {
          preserve: false,
        },
      },
    },
    cssnano: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    'postcss-media-minmax': {},
  },
};

/**
 * Надо будет смотреть за настройками пресета если начнутся проблемы со стилями
 * ? postcss-media-minmax
 * к сожалению в сасс не работает, оставлю на всякий для ксс обычного
 */
