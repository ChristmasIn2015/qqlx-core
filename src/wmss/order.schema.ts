import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

/** 订单分类 */
export enum ENUM_ORDER {
    /** 无 */
    NONE = 0,
    /** 采购单，Sku由于和库存没关系，不需要进行确认 */
    PURCHASE = 2000,
    /** 销售单，Sku由于和库存没关系，不需要进行确认 */
    SALES = 3000,
    /** 入库单，Sku确认后，需要创建对应 @cabinetUnit */
    GETIN = 4001,
    /** 加工单，Sku确认后，需要创建对应 @cabinetUnit */
    PROCESS = 4002,
    /** 发货单，Sku确认后，需要创建对应 @cabinetUnit 并且重新计算 @deductionSku 对应的Sku库存 */
    GETOUT = 4003,
    /** 领料单，Sku确认后，需要创建对应 @cabinetUnit 并且重新计算 @deductionSku 对应的Sku库存 */
    MATERIAL = 4004,
    /** 运输单*商家配送 */
    TRANSFORM_MERCHANT = 5001,
    /** 运输单*上门自提 */
    TRANSFORM_CUSTOMER = 5002,
}

const MAP_ENUM_ORDER = new Map<ENUM_ORDER, EnumMapOption>();
MAP_ENUM_ORDER.set(ENUM_ORDER.NONE, { value: ENUM_ORDER.NONE, text: "无" });
MAP_ENUM_ORDER.set(ENUM_ORDER.PURCHASE, { value: ENUM_ORDER.PURCHASE, text: "采购单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.SALES, { value: ENUM_ORDER.SALES, text: "销售单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.GETIN, { value: ENUM_ORDER.GETIN, text: "入库单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.PROCESS, { value: ENUM_ORDER.PROCESS, text: "加工单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.GETOUT, { value: ENUM_ORDER.GETOUT, text: "发货单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.MATERIAL, { value: ENUM_ORDER.MATERIAL, text: "领料单" });
MAP_ENUM_ORDER.set(ENUM_ORDER.TRANSFORM_MERCHANT, { value: ENUM_ORDER.TRANSFORM_MERCHANT, text: "运输单（商家配送）" });
MAP_ENUM_ORDER.set(ENUM_ORDER.TRANSFORM_CUSTOMER, { value: ENUM_ORDER.TRANSFORM_CUSTOMER, text: "运输单（自提）" });
export { MAP_ENUM_ORDER };

export type Order = {
    /** @foreign */
    corpId: string;

    /** @foreign */
    parentOrderId: string;
    parentOrderType: ENUM_ORDER;

    /** @foreign */
    creatorId: string;
    /** @foreign */
    contactId: string;
    /** @foreign 销售/采购负责人签字 */
    managerId: string;
    /** @foreign 钱货结清后，财务负责人签字 */
    accounterId: string;

    type: ENUM_ORDER;
    code: string;
    amount: number;
    remark: string;
    isDisabled: boolean;

    /** 此订单开出了多少金额的收付款证明 @以后需要拆分出去 */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
} & MongodbBase;
