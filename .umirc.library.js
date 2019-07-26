import px2rem from 'postcss-px2rem';

export default {
  entry: './src/index.js',
  esm: 'rollup',
  cjs: 'rollup',
  extraPostCSSPlugins: [px2rem],
}