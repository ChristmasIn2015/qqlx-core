import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";
import type { Book } from "../pond-book/book.schema";

export enum ENUM_INVIOCE_ORDER {
    /** 进项增值税 */
    VAT_PURCHASE = 2000,
    /** 销项增值税 */
    VAT_SALES = 3000,
}

/** 和税务局的交易订单、即发票 */
export type TradeInvoiceOrder = PgBaseSchema & _Owner & _Order & {
    type: ENUM_INVIOCE_ORDER;
}

/** 某笔交易涉及发票的账簿余额 */
export type TradeInvoiceOrderBookSummary = Book