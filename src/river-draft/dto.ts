import { INTEGER_PG } from "../../_/db.pg";
import { DraftNode, DraftNodeRelation } from "./schema";

export enum ENUM_DRAFT_NODE_RELATION {
    /** 没有关系 */
    NONE = 1000,
    /** 父子节点 */
    OWNERSHIP,
    /** 超越父子关系 */
    OVERLOAD,
}

export const PATH_RIVER_DRAFT_NODE = "/river/draft/node";
/** 添加新节点
 * @pid 没有就说明在添加根节点
 */
export type postDraftNodeDto = {
    schema: DraftNode;
    pid?: INTEGER_PG;
    relation?: ENUM_DRAFT_NODE_RELATION;
};
export type postDraftNodeRes = null;
/** 返回所有节点，在前端组装视图 */
export type getDraftNodeDto = null;
export type getDraftNodeRes = {
    rootNodeList: DraftNode[];
    relationList: DraftNodeRelation[];
};
/** 仅仅修改节点内容 */
export type putDraftNodeDto = { entity: DraftNode };
export type putDraftNodeRes = null;
/** 不显示节点内容、以及子节点 */
export type disableDraftNodeDto = { id: INTEGER_PG };
export type disableDraftNodeRes = null;

export const PATH_RIVER_DRAFT_NODE_RELATION = "/river/draft/node/relation";
/** 为节点添加新关系 */
export type postDraftNodeRelationDto = DraftNodeRelation;
export type postDraftNodeRelationRes = null;
/** 剪切迁移整个子树 */
export type putDraftNodeRelationDto = { entity: DraftNodeRelation };
export type putDraftNodeRelationRes = null;
/** 删除除了父子关系以外的新关系 */
export type deleteDraftNodeRelationDto = { relaid: INTEGER_PG };
export type deleteDraftNodeRelationRes = null;
