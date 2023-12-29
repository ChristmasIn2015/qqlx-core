import type { MongodbBase, EnumMapOption } from "qqlx-cdk";


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

    /** 合同日期 */
    timeContract: number;
    timeContractString?: string;

    /** 是否含税 */
    isNotTax: boolean;

    /** 此订单开出了多少金额的收付款证明 */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;

    /** 此订单开出了多少发票 */
    amountBookOfOrderVAT: number;
    amountBookOfOrderVATRest: number;
} & MongodbBase;
