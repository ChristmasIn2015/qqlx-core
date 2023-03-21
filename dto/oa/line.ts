import type { Line } from "../../schema/oa/line";
import type { LineBoxJoined } from "../../dto/oa/lineBox";
import type { LineAccessJoined } from "../../dto/oa/lineAccess";

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
