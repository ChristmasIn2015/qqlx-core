import type { BoxLine } from "../../schema/oa/boxLine";

export const PATH_OA_BOXLINE = "/qqlx/oa/box/line";
export type postBoxLineDto = BoxLine;
export type postBoxLineRes = null;

export type getBoxLineDto = null;
export type getBoxLineRes = BoxLine[];

export type patchBoxLineDto = BoxLine;
export type patchBoxLineRes = null;

export type deleteBoxLineDto = { entityId: string };
export type deleteBoxLineRes = null;
