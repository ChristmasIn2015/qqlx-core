import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";

export enum ENUM_INVIOCE_ORDER {
    /** 进项增值税 */
    VAT_PURCHASE = 2000,
    /** 销项增值税 */
    VAT_SALES = 3000,
}

/** 直接开出一张税务局相关的发票（订单）
 * @step1 可以在某笔交易，查询到涉及的发票
 */
export type PondTradeInvoice = PgBaseSchema & _Owner & _Order & {
    tradeId: INTEGER_PG;
    type: ENUM_INVIOCE_ORDER;
}