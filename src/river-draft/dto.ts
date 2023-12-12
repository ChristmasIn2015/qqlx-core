import { INTEGER_PG } from "../_/db.pg";
import { DraftNode } from "./schema";

export enum ENUM_DRAFT_NODE_RELATION {
    /** 所有权+父子节点 */
    OWN,
    /** 联合+兄弟节点 */
    COMBINE,
    /** 读取+远程查看 */
    READONLY,
}

export const PATH_RIVER_DRAFT_NODE = "/river/draft/node";
export type getDraftNodeDto = { ids: INTEGER_PG[] };
export type getDraftNodeRes = DraftNode[];

export type postDraftNodeDto = {
    pid: INTEGER_PG,
    list: DraftNode[],
    relation: ENUM_DRAFT_NODE_RELATION;
};
export type postDraftNodeRes = null;
export type putDraftNodeDto = { dto: DraftNode };
export type putDraftNodeRes = null;
export type disableDraftNodeDto = { id: INTEGER_PG };
export type disableDraftNodeRes = null;

export const PATH_RIVER_DRAFT_NODE_ROLE = "/river/draft/node/role";
export type getDraftNodeDto = { ids: INTEGER_PG[] };
export type getDraftNodeRes = DraftNode[];
export type postDraftNodeDto = {
    pid: INTEGER_PG,
    list: DraftNode[],
    relation: ENUM_DRAFT_NODE_RELATION;
};
export type postDraftNodeRes = null;
export type putDraftNodeDto = { dto: DraftNode };
export type putDraftNodeRes = null;
export type deleteDraftNodeRoleDto = { id: INTEGER_PG };
export type deleteDraftNodeRoleRes = null;
