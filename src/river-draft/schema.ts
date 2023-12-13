import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";

import { ENUM_DRAFT_NODE_RELATION } from "./dto"

/** 节点本身，包含一个标题，以及富文本 */
export type DraftNode = {
    title: VARCHAR50_PG;
    richtext: VARCHAR_PG;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE = "river_draft_node";

/** 节点之间的关系
 * @pid 父节点，例如可以根据根节点查询下一层所有子节点
 * @cid 当前节点
 */
export type DraftNodeRelation = {
    pid: INTEGER_PG;
    cid: INTEGER_PG;
    relation: ENUM_DRAFT_NODE_RELATION;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE_RELATION = "river_draft_node_relation";
