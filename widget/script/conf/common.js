/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @file 常用的方法
 */
define(function (require) {
    /**
     * @description: 加载js模块
     */
    require('zepto');
    require('transform');
    // require('alloy_touch');
    require('alloy_touch_css');
    var $api = require('api');
    var Vue = require('vue');

    /**
     * @description: 新建一个类
     */
    function Common() {

    }

    /**
     * @description: 初始化参数(全局变量+常量)
     */
    Common.prototype.init = function () {
        var self = this;
        window.$api = $api;
        window.Vue = Vue;
        self.initUI();
    };

    /**
     * @description: 初始化页面(首屏)
     */
    Common.prototype.initUI = function () {
        var self = this;

        var target = document.querySelector("#app");
        Transform(target,true);
        var alloyTouch = new AlloyTouch({
            touch: "#app",//反馈触摸的dom
            vertical: true,//不必需，默认是true代表监听竖直方向touch
            target: target, //运动的对象
            property: "translateY",  //被运动的属性
            min: 100, //不必需,运动属性的最小值
            max: 2000, //不必需,滚动属性的最大值
            sensitivity: 1,//不必需,触摸区域的灵敏度，默认值为1，可以为负数
            factor: 1,//不必需,表示触摸位移与被运动属性映射关系，默认值是1
            step: 45,//用于校正到step的整数倍
            bindSelf: false,
            initialValue: 0,
            change: function (value) {
                alert(value);
            },
            touchStart: function (evt, value) {
                alert(value);
            },
            touchMove: function (evt, value) {
                alert(value);
            },
            touchEnd: function (evt, value) {
                alert(value);
            },
            tap: function (evt, value) {
                alert(value);
            },
            pressMove: function (evt, value) {
                alert(value);
            },
            animationEnd: function (value) {
                alert(value);
            } //运动结束
        });
    };

    /**
     * @description: 事件管理
     */
    Common.prototype.events = function () {
        var self = this;

    };

    /**
     * @description: ajax管理
     */
    Common.prototype.https = function () {
        var self = this;
        return {};
    };

    /**
     * @description: 方法管理
     */
    Common.prototype.methods = function () {
        var self = this;
        return {};
    };

    return new Common();
});