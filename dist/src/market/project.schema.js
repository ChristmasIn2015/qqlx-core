"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_PROJECT = exports.ENUM_PROJECT = void 0;
/** 项目分类 */
var ENUM_PROJECT;
(function (ENUM_PROJECT) {
    /** 清泉流响 钢材·钢材办公室 */
    ENUM_PROJECT[(ENUM_PROJECT["KDBGS"] = 1000)] = "KDBGS";
    /** 清泉流响  */
    ENUM_PROJECT[(ENUM_PROJECT["OA"] = 2000)] = "OA";
})((ENUM_PROJECT = exports.ENUM_PROJECT || (exports.ENUM_PROJECT = {})));
const MAP_ENUM_PROJECT = new Map();
exports.MAP_ENUM_PROJECT = MAP_ENUM_PROJECT;
MAP_ENUM_PROJECT.set(ENUM_PROJECT.KDBGS, { value: ENUM_PROJECT.KDBGS, text: "钢材办公室" });
MAP_ENUM_PROJECT.set(ENUM_PROJECT.OA, { value: ENUM_PROJECT.OA, text: "办公平台" });
