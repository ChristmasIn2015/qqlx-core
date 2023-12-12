import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";

import { ENUM_ROLE_BASE } from "../_/role";
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

/** 根节点权限
 * @get 根据当前用户，返回其 “拥有” “可以读取” “可以写入” 的根节点
 * @put 添加修改根节点及其内容的时候，判断是否具有权限
 */
export type DraftNodeRole = {
    userId: INTEGER_PG;
    rootId: INTEGER_PG;
    role: ENUM_ROLE_BASE;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE_ROLE = "river_draft_node_role";
