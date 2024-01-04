import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory, _Order } from "../../_/trade";
import type { _Group } from "../../_/utils"

/** 法人订单的分组 */
export type TonOrderGroup = PgBaseSchema & _Owner & _Group

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
    tonOrderGroupId: INTEGER_PG;
    type: ENUM_TON_ORDER;
}