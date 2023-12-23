import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { UserInfo } from "../user/user.dto";
import type { Contact } from "../brand/contact.schema";
import type { Order } from "./order.schema";
import type { Sku } from "./sku.schema";
import type { Book, BookOfOrder } from "./book.schema";
import { SkuJoined } from "./sku.dto";

export const PATH_ORDER = "/qqlx/wmss/order";
export type postOrderDto = { schema: Order; skuList?: Sku[] };
export type postOrderRes = Order;

type _Book = { joinBook: Book } & BookOfOrder;
export type OrderJoined = Order & {
    joinContact?: Contact;

    joinCreator?: UserInfo;
    joinManager?: UserInfo;
    joinAccounter?: UserInfo;
    joinChildOrder?: Order[];
    joinParentOrder?: Order[];

    joinSku?: Sku[];
    joinBookOfOrder?: _Book[];

    joinCluePrint?: string;
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

    /** 以后可能用得上 */
    joinSku?: boolean;
    joinOther?: boolean;
};
export type getOrderRes = PageRes<OrderJoined>;

export type getOrderGroupDto = getOrderDto;
export type getOrderGroupRes = {
    amount: number;
    /** 此订单开出了多少金额的收付款证明 */
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
    /** 此订单开出了多少发票 */
    amountBookOfOrderVAT: number;
    amountBookOfOrderVATRest: number;
};

export type putOrderDto = { entity: Order; skuList?: Sku[] };
export type putOrderRes = Order;

export type deleteOrderDto = { orderId: string };
export type deleteOrderRes = null;

type _book = { joinBook: Book } & BookOfOrder;
export type getOrderInfoDto = { orderId: string };
export type getOrderInfoRes = {
    joinCreator: UserInfo;
    joinManager: UserInfo;
    joinAccounter: UserInfo;
    joinChildOrder: Order[];
    joinParentOrder: Order[];

    amount: number;
    skuList: SkuJoined[];
    bookOfOrderList: _book[];
};
