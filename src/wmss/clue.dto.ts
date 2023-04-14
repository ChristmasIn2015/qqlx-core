import type { Page, PageRes } from "qqlx-cdk";
import type { Clue } from "./clue.schema";
import { Order } from "./order.schema";

export const PATH_WMSS_CLUE = "/qqlx/wmss/clue";
export type postClueDto = {
    order?: Order;
};
export type postClueRes = null;

export type getClueDto = {
    search: Clue;
    page: Page;
};
export type getClueRes = PageRes<Clue>;
