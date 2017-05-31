/**
 * @Author: wangliang
 * @Date:   2017/5/4
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/5/4
 * @description {首页脚本}
 */
define(function (require) {
    var $api = require('api');
        function Index() {
            this.initUI();
            this.initRoutes();
            this.initEvents();
        }

        Index.prototype.initUI = function () {
            var self = this;

            var header = $api.byId('header');
            //适配iOS 7+，Android 4.4+状态栏
            $api.fixStatusBar(header);
            self.headerPos = $api.offset(header);
            var main = $api.byId('main');
            self.mainPos = $api.offset(main);
            var year = $api.byId('year');
            year.innerHTML = new Date().getFullYear();
        };

        Index.prototype.initRoutes = function () {
            var self = this;
            api.openFrame({
                name: 'main',
                url: 'html/main.html',
                bounces: true,
                rect: {
                    x: 0,
                    y: self.headerPos.h,
                    w: 'auto',
                    h: 500
                }
            });

        };

        Index.prototype.initEvents = function () {

        };

        new Index();
});
