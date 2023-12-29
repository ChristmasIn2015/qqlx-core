import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory, _Order } from "../../_/trade";

export type UserDroitOrder = PgBaseSchema & _Owner & _Order