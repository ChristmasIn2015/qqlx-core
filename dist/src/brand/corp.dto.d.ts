import type { Corp } from "./corp.schema";
export declare const PATH_BRAND_CORP = "/qqlx/brand/corp";
export type postCorpDto = Corp;
export type postCorpRes = Corp;
export type getCorpDto = null;
export type getCorpRes = (Corp & {
    isRoot: boolean;
})[];
export type patchCorpDto = Corp;
export type patchCorpRes = Corp;
export type deleteCorpDto = {
    entityId: string;
};
export type deleteCorpRes = null;
