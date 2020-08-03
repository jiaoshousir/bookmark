module.exports = {
  // 基本路径
  publicPath: './',
  // 输出文件目录
  outputDir: 'docs',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '个人网络收藏夹'
        return args
      })
  }
}