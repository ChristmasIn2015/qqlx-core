import { MongodbPage, MongodbPageRes } from "../../utils/database";

import type { ConfigCorp } from "../../schema/brand/configCorp";

export const PATH_CONFIG_CORP = "/qqlx/corp/announce";
export type postConfigCorp = ConfigCorp;
export type postAnnounceRes = null;

export type getAnnounceDto = null;
export type getAnnounceRes = ConfigCorp;
