"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_MARKET_ROLE = exports.ENUM_MARKET_ROLE = void 0;
var ENUM_MARKET_ROLE;
(function (ENUM_MARKET_ROLE) {
    /** 内部：营销中心超级管理员 */
    ENUM_MARKET_ROLE[ENUM_MARKET_ROLE["ROOT"] = 2000] = "ROOT";
    /** 内部：营销中心操作员 */
    ENUM_MARKET_ROLE[ENUM_MARKET_ROLE["BASE"] = 2100] = "BASE";
})(ENUM_MARKET_ROLE = exports.ENUM_MARKET_ROLE || (exports.ENUM_MARKET_ROLE = {}));
const MAP_ENUM_MARKET_ROLE = new Map();
exports.MAP_ENUM_MARKET_ROLE = MAP_ENUM_MARKET_ROLE;
MAP_ENUM_MARKET_ROLE.set(ENUM_MARKET_ROLE.ROOT, { value: ENUM_MARKET_ROLE.ROOT, text: "超级管理员" });
MAP_ENUM_MARKET_ROLE.set(ENUM_MARKET_ROLE.BASE, { value: ENUM_MARKET_ROLE.BASE, text: "操作员" });
