import type { Access } from "./access.schema";
import type { Line } from "./line.schema";
import type { LineAccess } from "./line.schema";
import type { LineBox } from "./line.schema";

import type { AccessJoined } from "./access.dto";
import type { BoxJoined } from "./box.dto";

export const PATH_OA_LINEACCESS = "/qqlx/oa/line/access";
export type postLineAccessDto = { lineId: string; accesses: Access[] };
export type postLineAccessRes = null;

export type LineAccessJoined = LineAccess & { joinAccess: AccessJoined };
export type getLineAccessDto = { lineId: string };
export type getLineAccessRes = LineAccessJoined[];

export type deleteLineAccessDto = { entityId: string };
export type deleteLineAccessRes = null;

export const PATH_OA_LINEBOX = "/qqlx/oa/line/box";
export type postLineBoxDto = LineBox;
export type postLineBoxRes = null;

export type deleteLineBoxDto = { entityId: string };
export type deleteLineBoxRes = null;

export type LineBoxJoined = LineBox & { joinBox: BoxJoined };

export const PATH_OA_LINE = "/qqlx/oa/line";
export type postLineDto = Line;
export type postLineRes = null;

export type LineJoined = Line & {
    joinBoxes: LineBoxJoined[];
    joinAccesses: LineAccessJoined[];
};
export type getLineDto = null;
export type getLineRes = LineJoined[];

export type patchLineDto = Line;
export type patchLineRes = null;

export type deleteLineDto = { entityId: string };
export type deleteLineRes = null;
