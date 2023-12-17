import { VARCHAR50_PG } from "../../next/_/db.pg";
import { PondLegoNode } from "./schema";

export enum ENUM_LEGO_VALUE {
    SMALLINT = 1000,
    VARCHAR255_PG = 2000,
    BOOLEAN = 3000,
}

export const DROPLET_POND_LEGO_NODE = "pond:lego:node";
export const PATH_POND_LEGO_NODE = "/pond/lego/node";

export type getPondLegoNodeDto = { scope: VARCHAR50_PG };
export type getPondLegoNodeRes = PondLegoNode[];

/** 新增/更新节点，如果不存在则会新增后返回 */
export type putPondLegoNodeDto = { list: PondLegoNode[] };
export type putPondLegoNodeRes = { list: PondLegoNode[] };
