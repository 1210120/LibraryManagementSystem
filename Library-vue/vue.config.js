// ElementPlus自动导入
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path');

module.exports = {
  devServer: {
    port: 8000
  },
  configureWebpack: {
    plugins: [
      // ElementPlus的自动导入
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  // 使用 chainWebpack 来修改 webpack 配置
  chainWebpack: config => {
    // 设置 '@' 别名指向 src 目录
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  }
}
