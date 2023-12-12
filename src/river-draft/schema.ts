import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";

import { ENUM_ROLE } from "../_/role";
import { ENUM_DRAFT_NODE_RELATION } from "./dto"

export type DraftNode = {
    title: VARCHAR50_PG;
    richtext: VARCHAR_PG;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE = "river_draft_node";

export type DraftNodeRelation = {
    nodeId: INTEGER_PG;
    pid: INTEGER_PG;
    relation: ENUM_DRAFT_NODE_RELATION;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE_RELATION = "river_draft_node_relation";

/** 添加修改根节点及其内容的时候，判断是否具有权限 */
export type DraftNodeRole = {
    userId: INTEGER_PG;
    rootId: INTEGER_PG;
    role: ENUM_ROLE;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE_ROLE = "river_draft_node_role";
