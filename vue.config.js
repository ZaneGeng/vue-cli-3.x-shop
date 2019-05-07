
module.exports = {
    devServer: {
        port:8080,
        open:true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/mock',
        //         ws: true,/*  proxy websockets */
        //         changeOrigin: true,/* 是否跨域 */
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     },
        //     '/foo': {
        //         target: '<other_url>'
        //     }
        // }
    }
}