import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";
import type { PondContact } from "../todo=pond-contact/schema";
import type { UserInfo } from "../stream-user/dto";
import { ENUM_TON_ORDER, TonOrder } from "../todo=river-trade-ton/order.schema";

/** 关键交易对象 */
export type PondTradeContact = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;

    contactId: INTEGER_PG;
    joinPondContact?: PondContact
};