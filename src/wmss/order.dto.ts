import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { UserWeChat } from "../user/user.schema";
import type { Contact } from "../brand/contact.schema";
import type { Order } from "./order.schema";
import type { Sku } from "./sku.schema";

export const PATH_ORDER = "/qqlx/wmss/order";
export type postOrderDto = { schema: Order; skuList?: Sku[] };
export type postOrderRes = Order;

export type OrderJoined = Order & {
    joinChildOrder?: Order[];
    joinParentOrder?: Order[];

    joinCreator?: UserWeChat;
    joinContact?: Contact;
    joinManager?: UserWeChat;
    joinAccounter?: UserWeChat;
    joinSku?: Sku[];
};

export type getOrderDto = {
    page: Page;
    search: Order;

    sortKey?: string;
    sortValue?: MongodbSort;
    groupKey?: string;

    /** 是否可复核 */
    requireManagerId?: boolean;
    /** 是否可结清 */
    requireAccounterId?: boolean;

    joinCreator?: boolean;
    joinContact?: boolean;
    joinManager?: boolean;
    joinAccounter?: boolean;
    joinSku?: boolean;
};
export type getOrderRes = PageRes<OrderJoined>;

export type putOrderDto = { entity: Order; skuList?: Sku[] };
export type putOrderRes = Order;

export type deleteOrderDto = { orderId: string };
export type deleteOrderRes = null;

export const PATH_ORDER_ANALYSIS = "/qqlx/wmss/order/analysis";

export type getOrderAnalysisDto = {
    startTime: number;
    endTime: number;
};
export type getOrderAnalysisRes = {
    // 销售订单
    amountSaleOrder: number;
    countSaleOrder: number;
    // 仓库订单
    countGetInOrder: number;
    countGetOutOrder: number;
    countMaterialOrder: number;
    countProcessOrder: number;

    amountBook: {
        /** 实收货款 */
        YSZK_DAI: number;
        /** 实开发票 */
        YSZK_VAT_JIE: number;
        /** 实付货款 */
        YFZK_JIE: number;
        /** 实收发票 */
        YFZK_VAT_DAI: number;
    };
};
