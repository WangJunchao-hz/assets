/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @file 首页脚本
 */
define(function (require) {
    //js模块加载
    var $api = require('api');
    var Vue = require('vue');
    var tab = require('aui_tap');

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        },
        beforeCreate: function () {
            $api.fixStatusBar(document.querySelector("#jHead"));
        },
        methods:function () {
            
        }
    });
});
