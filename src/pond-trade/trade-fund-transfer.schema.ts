import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";
import type { Book } from "../pond-book/book.schema";

export enum ENUM_FUND_TRANSFER_ORDER {
    /** 付款 */
    GETIN = 1000,
    /** 收款 */
    GETOUT = 2000,
}

/** 和银行的转账订单、即收付款记录 */
export type TradeFundTransferOrder = PgBaseSchema & _Owner & _Order & {
    type: ENUM_FUND_TRANSFER_ORDER
}

/** 某笔交易涉及的货款合计 */
export type TradeFundTransferOrderBookSummary = Book
