import type { Page, PageRes } from "qqlx-cdk";
import type { Clue } from "./clue.schema";

export const PATH_WMSS_CULE = "/qqlx/wmss/clue";
export type getClueDto = {
    search: Clue;
    page: Page;
};
export type getClueRes = PageRes<Clue>;
