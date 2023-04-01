"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_LOG = exports.ENUM_LOG = void 0;
var ENUM_LOG;
(function (ENUM_LOG) {
    /** 程序已经关闭 */
    ENUM_LOG[ENUM_LOG["OFF"] = 0] = "OFF";
    /** 重大错误：每个严重的错误事件将会导致应用程序的退出 */
    ENUM_LOG[ENUM_LOG["FATAL"] = 1] = "FATAL";
    /** 错误事件可能仍然允许应用程序继续运行 */
    ENUM_LOG[ENUM_LOG["ERROR"] = 2] = "ERROR";
    /** 指定具有潜在危害的情况 */
    ENUM_LOG[ENUM_LOG["WARN"] = 3] = "WARN";
    /** 指定能够突出在粗粒度级别的应用程序运行情况的信息的消息 */
    ENUM_LOG[ENUM_LOG["INFO"] = 4] = "INFO";
    /** 指定细粒度信息事件是最有用的应用程序调试 */
    ENUM_LOG[ENUM_LOG["DEBUG"] = 5] = "DEBUG";
    /** 表示业务开始 */
    ENUM_LOG[ENUM_LOG["TRACE"] = 6] = "TRACE";
    /** 表示业务完成 */
    ENUM_LOG[ENUM_LOG["ALL"] = 7] = "ALL";
})(ENUM_LOG = exports.ENUM_LOG || (exports.ENUM_LOG = {}));
const MAP_ENUM_LOG = new Map();
exports.MAP_ENUM_LOG = MAP_ENUM_LOG;
MAP_ENUM_LOG.set(ENUM_LOG.OFF, { value: ENUM_LOG.OFF, text: "程序已经关闭" });
MAP_ENUM_LOG.set(ENUM_LOG.FATAL, { value: ENUM_LOG.FATAL, text: "发现错误，程序已退出" });
MAP_ENUM_LOG.set(ENUM_LOG.ERROR, { value: ENUM_LOG.ERROR, text: "发现错误，程序保持运行中" });
MAP_ENUM_LOG.set(ENUM_LOG.WARN, { value: ENUM_LOG.WARN, text: "发现可能的潜在错误" });
MAP_ENUM_LOG.set(ENUM_LOG.INFO, { value: ENUM_LOG.INFO, text: "应用程序运行情况" });
MAP_ENUM_LOG.set(ENUM_LOG.DEBUG, { value: ENUM_LOG.DEBUG, text: "应用程序运行的具体情况" });
MAP_ENUM_LOG.set(ENUM_LOG.TRACE, { value: ENUM_LOG.TRACE, text: "业务开始" });
MAP_ENUM_LOG.set(ENUM_LOG.ALL, { value: ENUM_LOG.ALL, text: "业务完成" });
