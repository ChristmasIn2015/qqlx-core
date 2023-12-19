import type { PgBaseSchema, INTEGER_PG, VARCHAR255_PG, VARCHAR50_PG } from "../../next/_/db.pg";

import { ENUM_LEGO_VALUE } from "./dto";

export type PondLegoNode = {
    /** 表名:表中的记录id */
    scope: VARCHAR50_PG;

    type: ENUM_LEGO_VALUE;
    key: VARCHAR50_PG;

    /** 需要根据 type 进行 toString/toNumber/toBoolean 转换 */
    value: VARCHAR255_PG;
} & PgBaseSchema;
export const RELATIONS_POND_LEGO_NODE = "pond_lego_node";