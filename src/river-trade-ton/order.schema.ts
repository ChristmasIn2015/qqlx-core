import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory, _Order } from "../../_/trade";
import { UserInfo } from "../stream-user/dto";
import { Contact } from "../pond-contact/schema";

/** 法人订单的分组 */
export type TonOrderGroup = PgBaseSchema & _Owner & {
    title: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    remark: VARCHAR255_PG;
};

export enum ENUM_TON_ORDER {
    /** 无 */
    NONE = 0,
    /** 采购单 */
    PURCHASE = 2000,
    /** 销售单 */
    SALES = 3000,
    /** 入库单 */
    GETIN = 4001,
    /** 加工单 */
    PROCESS = 4002,
    /** 发货单 */
    GETOUT = 4003,
    /** 领料单 */
    MATERIAL = 4004,
    /** 运输单*商家配送 */
    TRANSFORM_MERCHANT = 5001,
    /** 运输单*上门自提 */
    TRANSFORM_CUSTOMER = 5002,
}

export type TonOrder = PgBaseSchema & _Owner & _Order & {

    code: string;
    type: ENUM_TON_ORDER;
    timeContract: string;

    joinOrderSignList?: TonOrderSign[]
    joinOrderContactList?: TonOrderContact[]

    /** 是否含税 */
    isNotTax: boolean;

    /** 此订单开出了多少金额的收付款证明 */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;

    /** 此订单开出了多少发票 */
    amountBookOfOrderVAT: number;
    amountBookOfOrderVATRest: number;
}

/** 法人订单的签字
 * @uuid32 谁签的字
*/
export type TonOrderSign = PgBaseSchema & {
    orderId: INTEGER_PG;

    uuid32: VARCHAR50_PG;
    joinUserInfo?: UserInfo
};

/** 法人订单的交易对手 */
export type TonOrderContact = PgBaseSchema & {
    orderId: INTEGER_PG;

    contactId: INTEGER_PG;
    joinContact?: Contact
};