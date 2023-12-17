import { INTEGER_PG } from "../../next/_/db.pg";
import { DraftNode, DraftNodeRelation } from "./schema";

export enum ENUM_DRAFT_NODE_RELATION {
    /** 意外关系 */
    NONE,
    /** 父子节点 */
    OWNERSHIP = 1001,
    /** 超越父子关系 */
    OVERLOAD,
}

export const PATH_RIVER_DRAFT_NODE = "/river/draft/node";
export type getDraftNodeDto = { ids: INTEGER_PG[] };
export type getDraftNodeRes = DraftNodeRelation[];
export type postDraftNodeDto = { schema: DraftNode; relation: DraftNodeRelation };
export type postDraftNodeRes = null;
export type putDraftNodeDto = { entity: DraftNode };
export type putDraftNodeRes = null;
export type disableDraftNodeDto = { id: INTEGER_PG };
export type disableDraftNodeRes = null;

export const PATH_RIVER_DRAFT_NODE_RELATION = "/river/draft/node/relation";
export type postDraftNodeRelationDto = { schema: DraftNodeRelation };
export type postDraftNodeRelationRes = null;
export type putDraftNodeRelationDto = { entity: DraftNode };
export type putDraftNodeRelationRes = null;
export type deleteDraftNodeRelationDto = { id: INTEGER_PG };
export type deleteDraftNodeRelationRes = null;
