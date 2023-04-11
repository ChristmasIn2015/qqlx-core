"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_CORP = exports.ENUM_CORP = void 0;
var ENUM_CORP;
(function (ENUM_CORP) {
    /** 未认证 */
    ENUM_CORP[ENUM_CORP["NONE"] = 0] = "NONE";
    /** 个体户 */
    ENUM_CORP[ENUM_CORP["STUDIO"] = 1] = "STUDIO";
    /** 公司 */
    ENUM_CORP[ENUM_CORP["COMPANY"] = 2] = "COMPANY";
})(ENUM_CORP = exports.ENUM_CORP || (exports.ENUM_CORP = {}));
const MAP_ENUM_CORP = new Map();
exports.MAP_ENUM_CORP = MAP_ENUM_CORP;
MAP_ENUM_CORP.set(ENUM_CORP.NONE, { value: ENUM_CORP.NONE, text: "未认证" });
MAP_ENUM_CORP.set(ENUM_CORP.STUDIO, { value: ENUM_CORP.STUDIO, text: "个体户" });
MAP_ENUM_CORP.set(ENUM_CORP.COMPANY, { value: ENUM_CORP.COMPANY, text: "公司" });
