import { ENUM_BRAND_SCOPE } from "../stream-brand-scope/dto";
import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";

export const RELATIONS_RIVER_DRAFT_NODE_NAME = "river_draft_node";

export type RDraftNode = {
    /** 邀请您为XX项目，绘制工程蓝图 */
    scope: ENUM_BRAND_SCOPE;

    /** 父节点 */
    pid: INTEGER_PG;
    richtext: VARCHAR_PG;

    title: VARCHAR50_PG;
    remark: VARCHAR50_PG;
} & PgBaseSchema;
