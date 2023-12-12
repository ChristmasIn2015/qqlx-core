import { INTEGER_PG } from "../_/db.pg";
import { DraftNode } from "./schema";

export enum ENUM_DRAFT_NODE_RELATION {
    /** 无关系 */
    NONE,
    /** 所有权 */
    OWN,
    /** 联合 */
    COMBINE,
    /** 读取 */
    READONLY,
}

export const PATH_RIVER_DRAFT_NODE = "/river/draft/node";
export type getDraftNodeDto = { ids: INTEGER_PG[] };
export type getDraftNodeRes = DraftNode[];
export type postDraftNodeDto = { dto: DraftNode };
export type postDraftNodeRes = null;
export type putDraftNodeDto = { dto: DraftNode };
export type putDraftNodeRes = null;
export type disableDraftNodeDto = { id: INTEGER_PG };
export type disableDraftNodeRes = null;
