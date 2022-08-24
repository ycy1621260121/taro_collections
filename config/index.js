import project from "./project";
import path from 'path';
const config = {
  projectName: "floorMaster",
  date: "2022-8-23",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: "src",
  outputRoot: project,
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: "react",
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        },
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          onePxTransform: true,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: [],
          replace: true,
          mediaQuery: false,
          minPixelValue: 0
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        },
      },
    },
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@reducers': path.resolve(__dirname, '..', 'src/reducers'),
    '@common': path.resolve(__dirname, '..', 'src/common'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@network': path.resolve(__dirname, '..', 'src/network')
  }
};

module.exports = function (merge) {
  console.log('process.env.NODE_ENV*************', process.env.NODE_ENV)
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
