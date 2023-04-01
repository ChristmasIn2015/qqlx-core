import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { Contact } from "../brand/contact.schema";
import type { Order, ENUM_ORDER } from "./order.schema";
import type { Sku } from "./sku.schema";

export const PATH_SKU = "/qqlx/wmss/sku";

export type SkuJoined = Sku & {
    joinOrder: Order;
    joinOrderContact: Contact;
};

export type getSkuDto = {
    page: Page;
    search: Sku;

    sortKey?: string;
    sortValue?: MongodbSort;
    groupKey?: string;
};
export type getSkuRes = PageRes<SkuJoined>;

export type getSkuByOrderDto = { orderId: string };
export type getSkuByOrderRes = SkuJoined[];

/** 仅用于入库、发货 */
export type patchSkuDto = { entity: Sku };
export type patchSkuRes = null;

export const PATH_SKU_ANALYSIS = "/qqlx/wmss/sku/analysis";
export type getSkuAnalysisDto = {
    startTime: number;
    endTime: number;
};
export type getSkuAnalysisRes = {
    // 未处理的Sku
    skuNotConfirmed: Record<ENUM_ORDER, number>;
    // 大件商品未入库/发货
    coutIndividualSkuNotConfirmed: number;
};
