import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory } from "../../_/trade";
import { UserDroitOrder } from "./order.schema";

/** 订单中，法人的使用有效期商品
*/
export type UserDroitSku = PgBaseSchema & _Owner & _Sku & {
    orderId: INTEGER_PG;
    joinUserDroitOrder?: UserDroitOrder;

    duration: INTEGER_PG;
};