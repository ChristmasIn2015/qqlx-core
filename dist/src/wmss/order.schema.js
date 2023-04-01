"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAP_ENUM_ORDER = exports.ENUM_ORDER = void 0;
/** 订单分类 */
var ENUM_ORDER;
(function (ENUM_ORDER) {
    /** 无 */
    ENUM_ORDER[ENUM_ORDER["NONE"] = 0] = "NONE";
    /** 采购单，Sku由于和库存没关系，不需要进行确认 */
    ENUM_ORDER[ENUM_ORDER["PURCHASE"] = 2000] = "PURCHASE";
    /** 销售单，Sku由于和库存没关系，不需要进行确认 */
    ENUM_ORDER[ENUM_ORDER["SALES"] = 3000] = "SALES";
    /** 入库单，Sku确认后，需要创建对应 @cabinetUnit */
    ENUM_ORDER[ENUM_ORDER["GETIN"] = 4001] = "GETIN";
    /** 加工单，Sku确认后，需要创建对应 @cabinetUnit */
    ENUM_ORDER[ENUM_ORDER["PROCESS"] = 4002] = "PROCESS";
    /** 发货单，Sku确认后，需要创建对应 @cabinetUnit 并且重新计算 @deductionSku 对应的Sku库存 */
    ENUM_ORDER[ENUM_ORDER["GETOUT"] = 4003] = "GETOUT";
    /** 领料单，Sku确认后，需要创建对应 @cabinetUnit 并且重新计算 @deductionSku 对应的Sku库存 */
    ENUM_ORDER[ENUM_ORDER["MATERIAL"] = 4004] = "MATERIAL";
    /** 运输单*商家配送 */
    ENUM_ORDER[ENUM_ORDER["TRANSFORM_MERCHANT"] = 5001] = "TRANSFORM_MERCHANT";
    /** 运输单*上门自提 */
    ENUM_ORDER[ENUM_ORDER["TRANSFORM_CUSTOMER"] = 5002] = "TRANSFORM_CUSTOMER";
})(ENUM_ORDER = exports.ENUM_ORDER || (exports.ENUM_ORDER = {}));
const MAP_ENUM_ORDER = new Map();
exports.MAP_ENUM_ORDER = MAP_ENUM_ORDER;
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.NONE, text: "无" });
MAP_ENUM_ORDER.set(ENUM_ORDER.PURCHASE, { value: ENUM_ORDER.PURCHASE, text: "采购单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.SALES, text: "销售单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.GETIN, text: "入库单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.PROCESS, text: "加工单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.GETOUT, text: "发货单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.MATERIAL, text: "领料单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.TRANSFORM_MERCHANT, { value: ENUM_ORDER.TRANSFORM_MERCHANT, text: "运输单（商家配送）" });
MAP_ENUM_ORDER.set(ENUM_ORDER.TRANSFORM_CUSTOMER, { value: ENUM_ORDER.TRANSFORM_CUSTOMER, text: "运输单（自提）" });
