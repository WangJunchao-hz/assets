/**
 * @Author: wangliang
 * @Date:   2017/4/1
 * @Last Modified by:   wangliang
 * @Last Modified time: 2017/4/1
 * @description {整理常用的工具方法}
 */

;(function (global) {
    function Utils() {
        
    };
    
    /**
     * @description{获取url参数}
     * @param {url:[],type[String]}
     * @param {name:[],type[String]}
     * @example {当前url：getUrlParams(name);指定url：getUrlParams(url,name)}
     */
    Utils.prototype.getUrlParams = function (url, name) {
        switch (arguments.length) {
            case 1:
                var url = window.location.href, name = arguments[0];
                return _factory(url, name);
                break;
            case 2:
                var url = arguments[0], name = arguments[1];
                return _factory(url, name);
                break;
        }
        function _factory(a, b) {
            var reg = new RegExp("(^|&)" + b + "=([^&]*)(&|$)");
            a = a.indexOf('?') === -1 ? '' : a.split('?')[1];
            var r = a.match(reg);
            return r != null ? decodeURI(r[2]) : null;
        };
    };
    
    /**
     * @description{拼接url参数}
     * @param {url:[],type[String]}
     * @param {params:[],type[Object]}
     * @example {未完成}
     */
    Utils.prototype.setUrlParams = function () {
        switch (arguments.length) {
            case 1:
                var url = window.location.href, params = arguments[0];
                return _factory(url, params);
                break;
            case 2:
                var url = arguments[0], params = arguments[1];
                return _factory(url, params);
                break;
        }
        function _factory(a, b) {
            
        };
    };
    
    /**
     * @description{日期格式转换:月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符
     *                          年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)}
     * @param {date:[指定时间],type[String]}
     * @param {format:[转换的格式],type[String]}
     * @param {dif:[是否返回当前时间与指定时间相差的秒数],type[Boolean]}
     * @example {当前时间：dateFormat(format);已有时间：dateFormat(date,format);返回时间差：dateFormat(date,format,dif) dateFormat(date,dif)}
     */
    Utils.prototype.dateFormat = function (date, format, dif) {
        switch (arguments.length) {
            case 1:
                var date = new Date(), format = arguments[0];
                return _factory(date, format, false); // 返回转换格式后的当前时间
                break;
            case 2:
                switch (typeof arguments[1]) {
                    case 'string':
                        var date = arguments[0], format = arguments[1];
                        return _factory(date, format, false); //返回转换格式后的指定时间
                        break;
                    case 'boolean':
                        var date = arguments[0], dif = arguments[1];
                        return _factory(date, null, dif); // 返回当前时间与指定时间的时间差_单位：s
                        break;
                }
                break;
            case 3:
                var date = arguments[0], format = arguments[1], dif = arguments[2];
                return _factory(date, format, dif);
                break;
        }
        function _factory(a, b, c) {
            var resultDate = '';
            var pushDate = new Date(a);
            
            if (c) {
                var differenceS = Math.round((pushDate.getTime() - (new Date()).getTime()) / 1000);//当前时间与指定时间相差的秒数
                if (b === null) {
                    resultDate = differenceS; // 不需要转换直接返回时间差
                } else {
                    resultDate = [_getDate(), differenceS]; // 需要转换返回转换后的时间和时间差
                }
            } else {
                resultDate = _getDate();
            }
            
            function _getDate() {
                var o = {
                    "M+": pushDate.getMonth() + 1, //月份
                    "d+": pushDate.getDate(), //日
                    "h+": pushDate.getHours() % 12 == 0 ? '上午' + pushDate.getHours() : '下午' + pushDate.getHours() % 12, //小时
                    "H+": pushDate.getHours(), //小时
                    "m+": pushDate.getMinutes(), //分
                    "s+": pushDate.getSeconds(), //秒
                    "q+": Math.floor((pushDate.getMonth() + 3) / 3), //季度
                    "S": pushDate.getMilliseconds() //毫秒
                };
                var week = {
                    "0": "一",
                    "1": "二",
                    "2": "三",
                    "3": "四",
                    "4": "五",
                    "5": "六",
                    "6": "日"
                };
                if (/(y+)/.test(b)) {
                    b = b.replace(RegExp.$1, (pushDate.getFullYear() + "").substr(4 - RegExp.$1.length));
                }
                if (/(E+)/.test(b)) {
                    b = b.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[pushDate.getDay() + ""]);
                }
                for (var k in o) {
                    if (new RegExp("(" + k + ")").test(b)) {
                        b = b.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (o[k].length > 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)));
                    }
                }
                return b;
            };
            return resultDate;
        };
    };
    
    /**
     * @description{获取时间差:默认是获取当前时间距明天零点的时间差_单位：天(d)时(h)分(m)秒(s)_默认：d}
     * @param {dateStart:[开始时间],type[String]}
     * @param {dateEnd:[结束时间],type[String]}
     * @param {unit:[单位],type[String]}
     * @example {getDifDate() getDifDate('d') getDifDate(date) getDifDate(date,'s') getDifDate(dateStart, dateEnd) getDifDate(dateStart, dateEnd, 's')}
     */
    Utils.prototype.getDifDate = function (dateStart, dateEnd, unit) {
        var dateStart, dateEnd, units = ['d', 'h', 'm', 's'], unit;
        switch (arguments.length) {
            case 1:
                if (units.indexOf(arguments[0]) != -1) {
                    unit = arguments[0];
                } else {
                    dateStart = new Date(arguments[0]);
                }
                return _factory();
                break;
            case 2:
                if (units.indexOf(arguments[1]) != -1) {
                    dateStart = new Date(arguments[0]);
                    unit = arguments[1];
                } else {
                    dateStart = new Date(arguments[0]);
                    dateEnd = new Date(arguments[1]);
                }
                return _factory();
                break;
            case 3:
                dateStart = new Date(arguments[0]);
                dateEnd = new Date(arguments[1]);
                unit = arguments[2];
                return _factory();
                break;
            default:
                return _factory();
                break;
        }
        function _factory() {
            var dif, difTime;
            if (!dateStart && !dateEnd) { // 获取当前时间距明天零点的时间差
                var tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(0);
                tomorrow.setMinutes(0);
                tomorrow.setSeconds(0);
                difTime = tomorrow.getTime() - (new Date()).getTime();
                dif = _unit(difTime);
            } else if (!dateEnd) { // 获取当天与指定时间的时间差
                difTime = dateStart.getTime() - (new Date()).getTime();
                dif = _unit(difTime);
            } else { //获取2个指定时间的时间差
                difTime = dateEnd.getTime() - dateStart.getTime();
                dif = _unit(difTime);
            }
            function _unit(time) {
                switch (unit) {
                    case 'h':
                        return time / 1000 / 60 / 60;
                        break;
                    case 'm':
                        return time / 1000 / 60;
                        break;
                    case 's':
                        return time / 1000;
                        break;
                    default:
                        return time / 1000 / 60 / 60 / 24;
                        break;
                }
            };
            return dif;
        };
    };
    
    /**
     * @description{设置cookie}
     * @param {name:[],type[string]}
     * @param {value:[],type[string | number]}
     * @param {expire:[过期时间],type[number],默认7d}
     * @param {unit:[单位],type[String],天(d)时(h)分(m)秒(s),默认：d}
     * @example {setCookie(name,value) setCookie(name,value,expire) setCookie(name,value,expire,unit)}
     */
    Utils.prototype.setCookie = function (name, value, expire, unit) {
        expire = expire === undefined ? 7 : expire;
        unit = unit === undefined ? 'd' : unit;
        var LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + _unit(expire));
        document.cookie = name + "=" + encodeURI(value) + ((expire === undefined) ? "" : ";expires=" + LargeExpDate.toUTCString()) + "; path=" + "/";
        function _unit(time) {
            switch (unit) {
                case 'h':
                    return time * 60 * 60 * 1000;
                    break;
                case 'm':
                    return time * 60 * 1000;
                    break;
                case 's':
                    return time * 1000;
                    break;
                default:
                    return time * 24 * 60 * 60 * 1000;
                    break;
            }
        };
    };
    
    /**
     * @description{获取cookie值}
     * @param {name:[],type[string]}
     * @example {}
     */
    Utils.prototype.getCookie = function (name) {
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        var arr = document.cookie.match(reg);
        return arr === null ? null : arr[2];
    };
    
    /**
     * @description{删除cookie值}
     * @param {name:[],type[string]}
     * @example {}
     */
    Utils.prototype.deleteCookie = function (name) {
        var self = this;
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var value = self.getCookie(name);
        if (value !== null) {
            document.cookie = name + "=" + value + ";expires=" + exp.toUTCString() + "; path=" + "/";
        }
    };
    
    /**
      * @description{判断是ios还是android}
      * @example {}
      */
    Utils.prototype.isIosAndroid = function () {
        var version,u = navigator.userAgent;
        if(u.indexOf("Android") > -1 || u.indexOf("Linux") > -1){ //android终端或者uc浏览器
            version = 'android';
        }else if(u.indexOf("iPhone") > -1){
            version = 'iPhone';
        }else if(u.indexOf("iPad") > -1){
            version = 'iPad';
        }
        return version; 
    };
    
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = new Utils();
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(new Utils());
    } else {
        global.Utils = new Utils();
    }
})(typeof window !== 'undefined' ? window : global);