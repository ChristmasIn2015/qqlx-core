"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_BOOK_DIRECTION = exports.ENUM_BOOK_DIRECTION = exports.MAP_ENUM_BOOK_TYPE = exports.ENUM_BOOK_TYPE = void 0;
/** 会计分录
 * @应收账款 1122 销售应收款
 * @应付账款 2202 采购应付款
 */
var ENUM_BOOK_TYPE;
(function (ENUM_BOOK_TYPE) {
    /** J 销售单 D 🌻实收货款额 */
    ENUM_BOOK_TYPE[ENUM_BOOK_TYPE["YSZK"] = 112201] = "YSZK";
    /** J 🌻开出销项发票* D 确认的销售额 */
    ENUM_BOOK_TYPE[ENUM_BOOK_TYPE["YSZK_VAT"] = 112202] = "YSZK_VAT";
    /** J 🌻实付货款额 D 采购单 */
    ENUM_BOOK_TYPE[ENUM_BOOK_TYPE["YFZK"] = 220201] = "YFZK";
    /** J 确认的采购额 D 🌻收到进项发票 */
    ENUM_BOOK_TYPE[ENUM_BOOK_TYPE["YFZK_VAT"] = 220202] = "YFZK_VAT";
})(ENUM_BOOK_TYPE = exports.ENUM_BOOK_TYPE || (exports.ENUM_BOOK_TYPE = {}));
const MAP_ENUM_BOOK_TYPE = new Map();
exports.MAP_ENUM_BOOK_TYPE = MAP_ENUM_BOOK_TYPE;
MAP_ENUM_BOOK_TYPE.set(ENUM_BOOK_TYPE.YSZK, { value: ENUM_BOOK_TYPE.YSZK, text: "已收款" });
MAP_ENUM_BOOK_TYPE.set(ENUM_BOOK_TYPE.YSZK_VAT, { value: ENUM_BOOK_TYPE.YSZK_VAT, text: "已开发票（销项）" });
MAP_ENUM_BOOK_TYPE.set(ENUM_BOOK_TYPE.YFZK, { value: ENUM_BOOK_TYPE.YFZK, text: "已付款" });
MAP_ENUM_BOOK_TYPE.set(ENUM_BOOK_TYPE.YFZK_VAT, { value: ENUM_BOOK_TYPE.YFZK_VAT, text: "已收发票（进项）" });
/** 会计分录 借贷方向 */
var ENUM_BOOK_DIRECTION;
(function (ENUM_BOOK_DIRECTION) {
    ENUM_BOOK_DIRECTION[ENUM_BOOK_DIRECTION["JIE"] = 1] = "JIE";
    ENUM_BOOK_DIRECTION[ENUM_BOOK_DIRECTION["DAI"] = 2] = "DAI";
})(ENUM_BOOK_DIRECTION = exports.ENUM_BOOK_DIRECTION || (exports.ENUM_BOOK_DIRECTION = {}));
const MAP_ENUM_BOOK_DIRECTION = new Map();
exports.MAP_ENUM_BOOK_DIRECTION = MAP_ENUM_BOOK_DIRECTION;
MAP_ENUM_BOOK_DIRECTION.set(ENUM_BOOK_DIRECTION.JIE, { value: ENUM_BOOK_DIRECTION.JIE, text: "借方" });
MAP_ENUM_BOOK_DIRECTION.set(ENUM_BOOK_DIRECTION.DAI, { value: ENUM_BOOK_DIRECTION.DAI, text: "贷方" });
