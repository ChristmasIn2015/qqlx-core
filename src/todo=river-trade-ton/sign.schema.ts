import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";
import type { Contact } from "../pond-contact/schema";
import type { UserInfo } from "../stream-user/dto";
import { ENUM_TON_ORDER, TonOrder } from "./order.schema";

/** 责任人的签字*/
export type TonOrderSign = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;
    tonOrderId: INTEGER_PG;

    joinSignUserInfo?: UserInfo
};