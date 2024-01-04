import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { PondTrade } from "./trade.schema";

export const PATH_POND_TRADE = "/pond/trade";
export const DROPLET_POND_TRADE = "pond:trade";
export type getPondTradeDto = Page<PondTrade>;
export type getPondTradeRes = PageRes<PondTrade>;
export type postPondTradeDto = PondTrade;
export type postPondTradRes = null;
export type putPondTradeDto = PondTrade;
export type putPondTradeRes = null;
export type disablePondTradeDto = { entityId: INTEGER_PG };
export type disablePondTradeRes = null;

export const PATH_POND_TRADE_CLUE = "/pond/trade/clue";
export const DROPLET_POND_TRADE_CLUE = "pond:trade:clue";
export type getPondTradeClueDto = Page<PondTrade>;
export type getPondTradeClueRes = PageRes<PondTrade>;
export type postPondTradeClueDto = PondTrade;
export type postPondTradClueRes = null;