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
    var vue = require('vue');
    var tab = require('aui_tap');

    //定义一个类
    function Index() {
        this.init();
        this.initUI();
        this.initRoutes();
        this.initEvents();
    }

    /**
     * @description 变量管理
     */
    Index.prototype.init = function () {
        var self = this;

    };

    /**
     * @description 页面首次加载
     */
    Index.prototype.initUI = function () {
        var self = this;

        $api.fixStatusBar(document.querySelector("#jHead"));

    };

    /**
     * @description 路由管理
     */
    Index.prototype.initRoutes = function () {
        var self = this;

    };

    /**
     * @description 事件管理
     */
    Index.prototype.initEvents = function () {
        var self = this;

    };

    new Index();
});
