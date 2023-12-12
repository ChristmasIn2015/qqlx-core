import type { PgBaseSchema, INTEGER_PG, VARCHAR255_PG, VARCHAR50_PG } from "../_/db.pg";

import { ENUM_LEGO } from "./dto"

export const RELATIONS_LEFO = "stream_lego_node";

/** 对应的 value 需要根据 type toString/toNumber 等 */
export type LegoNode = {
    /** 任意表名:表中的记录id */
    manualId: VARCHAR50_PG;

    type: ENUM_LEGO;
    key: VARCHAR50_PG;
    value: VARCHAR255_PG;
} & PgBaseSchema;
