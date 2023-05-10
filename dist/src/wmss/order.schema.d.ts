import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
/** 订单分类 */
export declare enum ENUM_ORDER {
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
    TRANSFORM_CUSTOMER = 5002
}
declare const MAP_ENUM_ORDER: Map<ENUM_ORDER, EnumMapOption>;
export { MAP_ENUM_ORDER };
export type Order = {
    /** @foreign */
    corpId: string;
    parentOrderId: string;
    parentOrderType: ENUM_ORDER;
    creatorId: string;
    contactId: string;
    managerId: string;
    accounterId: string;
    type: ENUM_ORDER;
    code: string;
    amount: number;
    remark: string;
    isDisabled: boolean;
    /** 是否含税 */
    isNotTax: boolean;
    /** 此订单开出了多少金额的收付款证明 */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
    /** 此订单开出了多少发票 */
    amountBookOfOrderVAT: number;
    amountBookOfOrderVATRest: number;
} & MongodbBase;
