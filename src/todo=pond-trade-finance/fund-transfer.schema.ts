import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";

export enum ENUM_POND_FUND_TRANSFER_ORDER {
    /** 付款 */
    GETIN = 1000,
    /** 收款 */
    GETOUT = 2000,
}

/** 和银行的转账订单、即收付款记录 */
export type PondTradeFundTransferOrder = PgBaseSchema & _Owner & _Order & {
    tradeId: INTEGER_PG;
    type: ENUM_POND_FUND_TRANSFER_ORDER
}
