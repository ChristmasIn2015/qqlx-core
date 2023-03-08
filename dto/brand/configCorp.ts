import { MongodbPage, MongodbPageRes } from "../../utils/database";

import type { ConfigCorp } from "../../schema/brand/configCorp";

export const PATH_CONFIG_CORP = "/qqlx/corp/config";
export type postConfigCorpDto = ConfigCorp;
export type postConfigCorpRes = null;

export type getConfigCorpDto = null;
export type getConfigCorpRes = ConfigCorp;
