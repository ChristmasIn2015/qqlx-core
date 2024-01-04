import { INTEGER_PG } from "../../_/db.pg";
import { Page, PageRes } from "../../_/search";
import type { PondTradeInvoice } from "./invoice.schema";

export const PATH_POND_TRADE_INVOICE = "/pond/trade/invoice";
export const DROPLET_POND_TRADE_INVOICE = "pond:trade:invoice";
export type postPondTradeInvoiceDto = { schema: PondTradeInvoice };
export type postPondTradInvoiceRes = null;
export type disablePondTradeInvoiceDto = { entityId: INTEGER_PG };
export type disablePondTradeInvoiceRes = null;