import type { Config } from "./config.schema";

export const PATH_BRAND_CONFIG = "/qqlx/brand/config";
export type postConfigCorpDto = Config;
export type postConfigCorpRes = null;

export type getConfigCorpDto = null;
export type getConfigCorpRes = Config;
