import { Corp } from "../../schema/brand/corp";

export const PATH_CORP = "/qqlx/corp";
export type postCorpDto = Corp;
export type postCorpRes = Corp;

export type getCorpDto = null;
export type getCorpRes = Corp[];

export type patchCorpDto = Corp;
export type patchCorpRes = Corp;

export type deleteCorpDto = { corpId: string };
export type deleteCorpRes = null;
