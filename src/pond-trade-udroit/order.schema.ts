import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory, _Order } from "../../_/trade";
import { ENUM_PAY_STATUS_WECHAT } from "../stream-pay/pay.schema";

export type UserDroitOrder = PgBaseSchema & _Owner & _Order

/** 微信支付情况 */
export type UserDroitOrderWeChatPayment = PgBaseSchema & _Owner & {
    uuid: VARCHAR50_PG;
    status: ENUM_PAY_STATUS_WECHAT;

    userDroitOrderId: INTEGER_PG;
}