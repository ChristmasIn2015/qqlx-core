import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { UserWeChat } from "../../schema/user/userWeChat";
import type { Contact } from "../../schema/brand/contact";
import type { Order } from "../../schema/wmss/order";
import type { Sku } from "../../schema/wmss/sku";
import type { Fee } from "../../schema/wmss/fee";

export const PATH_ORDER = "/qqlx/wmss/order";
export type postOrderDto = { schema: Order; skuList?: Sku[]; feeList?: Fee[] };
export type postOrderRes = Order;

export type OrderInView = Order & {
	joinChildOrder?: Order;
	joinParentOrder?: Order;

	joinCreator?: UserWeChat;
	joinContact?: Contact;
	joinManager?: UserWeChat;
	joinAccounter?: UserWeChat;

	joinSku?: Sku[];
	joinFee?: Fee[];
};
export type OrderInSearch = Order & {
	joinContact?: Contact;
};

export type getOrderDto = {
	sortKey?: string;
	sortValue?: MongodbSort;

	/** 是否可复核 */
	managerIdRequired?: boolean;
	/** 是否可结清 */
	accounterIdIdRequired?: boolean;
	// 聚合客户
	joinContact: boolean;
	// 聚合各类用户 及客户
	joinUser: boolean;
	// 聚合Sku
	joinSku: boolean;
	// 全部都要
	join: boolean;

	page: MongodbPage;
	search: Order;
};
export type getOrderRes = MongodbPageRes<OrderInView>;

export type putOrderDto = { entity: Order; skuList?: Sku[]; feeList?: Fee[] };
export type putOrderRes = Order;

export type deleteOrderDto = { orderId: string };
export type deleteOrderRes = null;
