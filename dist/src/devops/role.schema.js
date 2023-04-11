"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_DEVOPS_ROLE = exports.ENUM_DEVOPS_ROLE = void 0;
var ENUM_DEVOPS_ROLE;
(function (ENUM_DEVOPS_ROLE) {
    /** 内部：开发中心超级管理员 */
    ENUM_DEVOPS_ROLE[ENUM_DEVOPS_ROLE["ROOT"] = 1000] = "ROOT";
    /** 内部：开发中心操作员 */
    ENUM_DEVOPS_ROLE[ENUM_DEVOPS_ROLE["BASE"] = 1100] = "BASE";
})(ENUM_DEVOPS_ROLE = exports.ENUM_DEVOPS_ROLE || (exports.ENUM_DEVOPS_ROLE = {}));
const MAP_ENUM_DEVOPS_ROLE = new Map();
exports.MAP_ENUM_DEVOPS_ROLE = MAP_ENUM_DEVOPS_ROLE;
MAP_ENUM_DEVOPS_ROLE.set(ENUM_DEVOPS_ROLE.ROOT, { value: ENUM_DEVOPS_ROLE.ROOT, text: "超级管理员" });
MAP_ENUM_DEVOPS_ROLE.set(ENUM_DEVOPS_ROLE.BASE, { value: ENUM_DEVOPS_ROLE.BASE, text: "操作员" });
