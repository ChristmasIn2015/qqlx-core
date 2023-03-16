import type { Spu } from "../../schema/cms/spu";

export const PATH_CMS_SPU = "/qqlx/cms/spu";
export type postSpuDto = Spu;
export type postSpuRes = null;

export type getSpuDto = null;
export type getSpuRes = Spu[];

export type patchSpuDto = Spu;
export type patchSpuRes = null;

export type deleteSpuDto = { spuId: string };
export type deleteSpuRes = null;
