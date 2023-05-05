import { Page, PageRes, MongodbSort } from "qqlx-cdk";
import type { Contact } from "../brand/contact.schema";
import type { Order, ENUM_ORDER } from "./order.schema";
import type { Sku } from "./sku.schema";
import { Warehouse } from "../brand/warehouse.schema";
export declare const PATH_SKU = "/qqlx/wmss/sku";
export type SkuJoined = Sku & {
    joinWarehouse?: Warehouse;
    joinOrder: Order;
    joinOrderContact: Contact;
    /** 销售中的重量 */
    poundsSaleing?: number;
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
