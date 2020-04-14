

module.exports = {
    devServer: {
        //设置代理
        proxy: {
            '/api': {
                target: 'http://localhost:8443',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static'

}


