import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import { SkuTplGroup, CommonSku } from "../pond-trade/sku.schema";

/** 分组中有哪些可售商品模板 */
export type DurationSkuTplRelation = {
    uid: VARCHAR50_PG;
    gid: INTEGER_PG;
    cid: INTEGER_PG;

    joinGroup?: SkuTplGroup;
    joinDurationSkuTpl?: DurationSkuTpl;
} & PgBaseSchema;

export type DurationSkuTpl = {

    /** 秒 */
    duration: INTEGER_PG
} & CommonSku & PgBaseSchema;

export type DurationSku = {} & DurationSkuTpl & PgBaseSchema;