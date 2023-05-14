"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_CONTACT = exports.ENUM_CONTACT = void 0;
var ENUM_CONTACT;
(function (ENUM_CONTACT) {
    ENUM_CONTACT[ENUM_CONTACT["NONE"] = 1000] = "NONE";
    /** 供应商 */
    ENUM_CONTACT[ENUM_CONTACT["PURCHASE"] = 2000] = "PURCHASE";
    /** 客户 */
    ENUM_CONTACT[ENUM_CONTACT["SALES"] = 3000] = "SALES";
})(ENUM_CONTACT = exports.ENUM_CONTACT || (exports.ENUM_CONTACT = {}));
const MAP_ENUM_CONTACT = new Map();
exports.MAP_ENUM_CONTACT = MAP_ENUM_CONTACT;
MAP_ENUM_CONTACT.set(ENUM_CONTACT.NONE, { value: ENUM_CONTACT.NONE, text: "其他" });
MAP_ENUM_CONTACT.set(ENUM_CONTACT.PURCHASE, { value: ENUM_CONTACT.PURCHASE, text: "供应商" });
MAP_ENUM_CONTACT.set(ENUM_CONTACT.SALES, { value: ENUM_CONTACT.SALES, text: "客户" });
