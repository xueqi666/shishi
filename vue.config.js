const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
  devServer: {
    proxy: {
      '/detects':{
        target:'https://api-cn.faceplusplus.com',
        pathRewrite:{'^/detects':''}
      },
      '/check':{
        target:'https://api-cn.faceplusplus.com',
        pathRewrite:{'^/check':''}
      },
      '/select':{
        target:'https://api-cn.faceplusplus.com',
        pathRewrite:{'^/select':''}
      }
    }
  }
  
})
// https://api-cn.faceplusplus.com/facepp/v3/detect