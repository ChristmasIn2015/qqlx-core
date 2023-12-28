import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import { Estate, Mark } from "../pond-asset/schema";

/** 商品关联了哪些房产 */
export type TonSkuEstateRelation = {
    uid: VARCHAR50_PG;
    aid: INTEGER_PG;
    cid: INTEGER_PG;
} & PgBaseSchema;

/** 商品关联了哪些房产 */
export type TonSkuMarkRelation = {
    uid: VARCHAR50_PG;
    aid: INTEGER_PG;
    cid: INTEGER_PG;
} & PgBaseSchema;
