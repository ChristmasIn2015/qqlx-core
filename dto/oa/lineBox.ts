import type { BoxJoined } from "../../dto/oa/box";
import type { LineBox } from "../../schema/oa/lineBox";

export const PATH_OA_LINEBOX = "/qqlx/oa/line/box";
export type postLineBoxDto = LineBox;
export type postLineBoxRes = null;

export type deleteLineBoxDto = { entityId: string };
export type deleteLineBoxRes = null;

export type LineBoxJoined = LineBox & { joinBox: BoxJoined };
