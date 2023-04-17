import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { UserInfo } from "../user/user.dto";
import type { Contact } from "../brand/contact.schema";
import type { Order, ENUM_ORDER } from "./order.schema";
import type { Sku } from "./sku.schema";
import type { Book, BookOfOrder } from "./book.schema";
import { SkuJoined } from "./sku.dto";

export const PATH_ORDER = "/qqlx/wmss/order";
export type postOrderDto = { schema: Order; skuList?: Sku[] };
export type postOrderRes = Order;

type _Book = { joinBook: Book } & BookOfOrder;
export type OrderJoined = Order & {
    joinChildOrder?: Order[];
    joinParentOrder?: Order[];

    joinCreator?: UserInfo;
    joinContact?: Contact;
    joinManager?: UserInfo;
    joinAccounter?: UserInfo;
    joinSku?: Sku[];
    joinBookOfOrder?: _Book[];
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

type _book = { joinBook: Book } & BookOfOrder;
export type getSkuByOrderDto = { orderId: string };
export type getSkuByOrderRes = {
    skuList: SkuJoined[];
    bookOfOrderList: _book[];
    joinCreator?: UserInfo;
    joinManager?: UserInfo;
    joinAccounter?: UserInfo;
    joinChildOrder?: Order[];
    joinParentOrder?: Order[];
};
