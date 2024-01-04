import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { PondTradeFundTransferOrder } from "./fund-transfer.schema";

export const PATH_POND_TRADE_FUND_TRANSFER = "/pond/trade/fund/transfer";
export const DROPLET_POND_TRADE_FUND_TRANSFER = "pond:trade:fund:transfer";
export type postPondTradeFundTransferDto = { schema: PondTradeFundTransferOrder };
export type postPondTradFundTransferRes = null;
export type disablePondTradeFundTransferDto = { entityId: INTEGER_PG };
export type disablePondTradeFundTransferRes = null;