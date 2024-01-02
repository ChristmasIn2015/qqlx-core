import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";

import { ENUM_BOOK_TYPE, ENUM_BOOK_DIRECTION } from "./book.enum"

/** 账簿记录
 * @amount 分
*/
export type Book = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;

    type: ENUM_BOOK_TYPE;
    direction: ENUM_BOOK_DIRECTION;
    amount: INTEGER_PG
}