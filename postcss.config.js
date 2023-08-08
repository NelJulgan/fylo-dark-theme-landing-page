import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import preCss from 'precss';
import postcssPresetEnv from 'postcss-preset-env';
import postcssAssets from 'postcss-assets';

export default {
  plugins: [
    autoprefixer,
    postcssNesting,
    preCss,
    postcssPresetEnv({
      stage: 1,
    }),
    postcssAssets({
      loadPaths: ['/images'],
    }),
  ],
};
