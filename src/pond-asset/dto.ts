import { INTEGER_PG } from "../../_/db.pg";
import type { Corp, Estate, FundAccount } from "./schema";

export const PondAssetTH_POND_ASSET_CORP = "/pond/asset/corp";
export type getPondAssetCorpDto = null;
export type getPondAssetCorpRes = Corp[];
export type putPondAssetCorpDto = Corp;
export type putPondAssetCorpRes = Corp;
export type disablePondAssetCorpDto = { entityId: INTEGER_PG };
export type disablePondAssetCorpRes = null;

export const PondAssetTH_POND_ASSET_ESTATE = "/pond/asset/estate";
export type getPondAssetEstateDto = null;
export type getPondAssetEstateRes = Estate[];
export type putPondAssetEstateDto = Estate;
export type putPondAssetEstateRes = Estate;
export type disablePondAssetEstateDto = { entityId: INTEGER_PG };
export type disablePondAssetEstateRes = null;

export const PondAssetTH_POND_ASSET_FUND_ACCOUNT = "/pond/asset/fund/account";
export type getPondAssetFundAccountDto = null;
export type getPondAssetFundAccountRes = FundAccount[];
export type putPondAssetFundAccountDto = FundAccount;
export type putPondAssetFundAccountRes = FundAccount;
export type disablePondAssetFundAccountDto = { entityId: INTEGER_PG };
export type disablePondAssetFundAccountRes = null;
