/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @description {}
 */
require.config({
    paths: {
        "zepto": "lib/zepto/1.2.0/zepto.min",
        "vue": "lib/vue/2.2.0/vue.min",
        "api": "plugins/apicloud/1.0.0/api",
        "echarts": "plugins/echarts/3.5.2/echarts.min",
        "date": "lib/utils/date/1.0.0/date",
        "common":"conf/common",
        "transform":"lib/alloy_touch/0.2.5/transform",
        "alloy_touch":"lib/alloy_touch/0.2.5/alloy_touch",
        "alloy_touch_css":"lib/alloy_touch/0.2.5/alloy_touch.css",
        "alloy_touch_vue":"lib/alloy_touch/0.2.5/alloy_touch.vue"
    },
    shim: {
        "api": {
            exports: "$api"
        }
    }
});
