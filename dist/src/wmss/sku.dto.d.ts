import { Page, PageRes, MongodbSort } from "qqlx-cdk";
import type { Contact } from "../brand/contact.schema";
import type { Order, ENUM_ORDER } from "./order.schema";
import type { Sku } from "./sku.schema";
export declare const PATH_SKU = "/qqlx/wmss/sku";
export type SkuJoined = Sku & {
    joinOrder: Order;
    joinOrderContact: Contact;
};
export type getSkuDto = {
    page: Page;
    search: Sku;
    types: ENUM_ORDER[];
    sortKey?: string;
    sortValue?: MongodbSort;
    groupKey?: string;
};
export type getSkuRes = PageRes<SkuJoined>;
/** 仅用于入库、发货 */
export type patchSkuDto = {
    entity: Sku;
};
export type patchSkuRes = null;
export declare const PATH_SKU_ANALYSIS = "/qqlx/wmss/sku/analysis";
export type getSkuAnalysisDto = {
    startTime: number;
    endTime: number;
}[];
export type getSkuAnalysisRes = {
    startTime: number;
    endTime: number;
    calcu: Record<ENUM_ORDER, {
        confirmed: number;
        total: number;
    }>;
}[];
