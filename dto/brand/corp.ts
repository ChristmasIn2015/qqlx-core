import type { Corp } from "../../schema/brand/corp";
import type { RoleWMSS } from "../../schema/wmss/role";

export const PATH_CORP = "/qqlx/corp";
export type postCorpDto = Corp;
export type postCorpRes = Corp;

export type getCorpDto = null;
export type getCorpRes = (Corp & { joinRole: RoleWMSS })[];

export type patchCorpDto = Corp;
export type patchCorpRes = Corp;

export type deleteCorpDto = { corpId: string };
export type deleteCorpRes = null;
