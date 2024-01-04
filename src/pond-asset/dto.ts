import { INTEGER_PG } from "../../_/db.pg";
import type { PondAsset } from "./schema";

export const PATH_POND_ASSET = "/pond/asset";
export const DROPLET_POND_ASSET = "/pond/asset";
export type getPondAssetDto = null;
export type getPondAssetRes = PondAsset[];
export type putPondAssetDto = PondAsset;
export type putPondAssetRes = PondAsset;
export type disablePondAssetDto = { entityId: INTEGER_PG };
export type disablePondAssetRes = null;
