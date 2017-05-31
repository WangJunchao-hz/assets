/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @description {}
 */
require.config({
    paths : {
        "vue" : "lib/vue/2.2.0/vue.min",
        "api" : "lib/apicloud/1.0.0/api",
        "echarts" : "plugins/echarts/3.5.2/echarts.min"
    },
    shim: {
        "api" : {
            exports : "$api"
        }
    }
});
