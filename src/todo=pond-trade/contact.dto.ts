import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";
import type { PondContact } from "../todo=pond-contact/schema";
import { PondTrade } from "./trade.schema";

export const PATH_POND_TRADE_CONTACT = "/pond/trade/contact";
export const DROPLET_POND_TRADE_CONTACT = "pond:trade:contact";
export type putPondTradeContactDto = { trade: PondTrade, contact: PondContact };
export type putPondTradeContactRes = null;
export type deletePondTradeContactDto = { entityId: INTEGER_PG };
export type deletePondTradeContactRes = null;