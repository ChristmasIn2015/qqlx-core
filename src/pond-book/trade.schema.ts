import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";

import { ENUM_BOOK_TYPE, ENUM_BOOK_DIRECTION } from "./book.enum"

/** 一笔交易，需要保证借贷要相等 */
export type Trade = PgBaseSchema & _Owner & {
    code: VARCHAR50_PG;
}

/** 记录对方与我方的资金过程（仅继承） */
export type _TradeRecord = {
    tradeId: INTEGER_PG;
    code: VARCHAR50_PG;
    amount: INTEGER_PG;
    remark: VARCHAR50_PG;

    /** 对手单位 */
    opSideName: VARCHAR50_PG;

    /** 我方单位 */
    sideName: VARCHAR50_PG;
}

/** 收付款记录 */
export type TradeReceipt = PgBaseSchema & _Owner & _TradeRecord

/** 发票 */
export type TradeInvoice = PgBaseSchema & _Owner & _TradeRecord

/** 订单 */
export type TradeOrder = PgBaseSchema & _Owner & _TradeRecord & {
    orderId: INTEGER_PG;
}