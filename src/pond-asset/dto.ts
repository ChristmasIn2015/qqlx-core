import { INTEGER_PG } from "../../_/db.pg";
import type { Asset } from "./schema";

export const PondAssetTH_POND_ASSET_CORP = "/pond/asset";
export type getPondAssetDto = null;
export type getPondAssetRes = Asset[];
export type putPondAssetDto = Asset;
export type putPondAssetRes = Asset;
export type disablePondAssetDto = { entityId: INTEGER_PG };
export type disablePondAssetRes = null;
