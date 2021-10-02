module.exports = {
    //开启代理服务器(方式一)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }
    //开启代理服务器(方式二)
    devServer: {
        proxy: {
          '/lep101_student': {
            target: 'http://localhost:5000',
            pathRewrite:{'^/lep101_student':''},
            ws: true, //用于支持websocket
            changeOrigin: true  //代理服务器伪装 "撒谎"
          },
          '/lep101_car': {
            target: 'http://localhost:5001',
            pathRewrite:{'^/lep101_car':''},
          }
        }
      }
}