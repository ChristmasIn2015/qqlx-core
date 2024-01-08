import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG } from "../../_/db.pg";
import { _Owner } from "../stream-user/schema";

import { ENUM_DRAFT_NODE_RELATION } from "./dto";

/** 节点本身，包含一个标题，以及富文本
 * @rid 和 id 对比是否是根节点
 */
export type DraftNode = PgBaseSchema & _Owner & {
    title: VARCHAR50_PG;
    richtext: VARCHAR_PG;
};
export const RELATIONS_RIVER_DRAFT_NODE = "river_draft_node";

/** 节点之间的关系
 * @rid 根节点，例如可以根据根节点查询下一层所有子节点
 * @pid 父节点，例如可以根据根节点查询下一层所有子节点
 * @cid 当前节点
 */
export type DraftNodeRelation = PgBaseSchema & _Owner & {
    pid: INTEGER_PG;
    cid: INTEGER_PG;
    isRoot: Boolean;

    relation: ENUM_DRAFT_NODE_RELATION;
    order: SMALLINT_PG;
};
export const RELATIONS_RIVER_DRAFT_NODE_RELATION = "river_draft_node_relation";
