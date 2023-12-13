
import { VARCHAR50_PG } from "../_/db.pg";
import { StreamLegoNode } from "./schema";

export enum ENUM_LEGO_VALUE {
    SMALLINT = 1000,
    VARCHAR255_PG = 2000,
    BOOLEAN = 3000,
}

export const DROPLET_STREAM_LEGO_NODE = "stream:lego:node";
export const PATH_STREAM_LEGO_NODE = "/stream/lego/node";

export type getStreamLogDto = { scope: VARCHAR50_PG };
export type getStreamLogRes = StreamLegoNode[];

/** 新增/更新节点，如果不存在则会新增后返回 */
export type putStreamLogDto = { list: StreamLegoNode[] };
export type putStreamLogRes = { list: StreamLegoNode[] };