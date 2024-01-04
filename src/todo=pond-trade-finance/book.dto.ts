import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { Page, PageRes } from "../../_/search"

import type { PondTrade } from "../pond-trade/trade.schema"
import type { PondTradeBook, PondTradeBookSummary } from "./book.schema";

export const PATH_POND_TRADE_BOOK = "/pond/trade/book";
export const DROPLET_POND_TRADE_BOOK = "pond:trade:book";
export type postPondTradeBookDto = { trade: PondTrade, schemaList: PondTradeBook[] };
export type postPondTradeBookRes = null;
export type disablePondTradeBookDto = { entityId: INTEGER_PG };
export type disablePondTradeBookRes = null;

export const PATH_POND_TRADE_BOOK_SUMMARY = "/pond/trade/book/summary";
export const DROPLET_POND_TRADE_BOOK_SUMMARY = "pond:trade:book:summary";
export type putPondTradeBookSummaryDto = { trade: PondTrade, schema: PondTradeBookSummary };
export type putPondTradeBookSummaryRes = null;