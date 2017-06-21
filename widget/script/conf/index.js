/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @file 首页脚本
 */
define(function (require) {
    /**
     * @description: 加载js模块
     */
    var $api = require('api');
    var Vue = require('vue');
    var $ = require('zepto');

    /**
     * @description: 新建一个类
     */
    function Index() {
        this.init();
        this.initUI();
        this.events();
    }

    /**
     * @description: 初始化参数(全局变量+常量)
     */
    Index.prototype.init = function () {
        var self = this;

    };

    /**
     * @description: 初始化页面(首屏)
     */
    Index.prototype.initUI = function () {
        var self = this;

        $api.fixStatusBar($api.byId("jHeader"));

        self.app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            },
            beforeCreate: function () {

            },
            computed: function () {

            },
            methods: function () {

            }
        });
    };

    /**
     * @description: 事件管理
     */
    Index.prototype.events = function () {
        var self = this;

    };

    /**
     * @description: ajax管理
     */
    Index.prototype.https = function () {
        var self = this;
        return {

        };
    };

    /**
     * @description: 方法管理
     */
    Index.prototype.methods = function () {
        var self = this;
        return {

        };
    };

    new Index();
});
