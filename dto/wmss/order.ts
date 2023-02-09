import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import { User } from "../../schema/user/user";
import { Contact } from "../../schema/brand/contact";
import { Order } from "../../schema/wmss/order";
import { Sku } from "../../schema/wmss/sku";
import { Fee } from "../../schema/wmss/fee";

export const PATH_ORDER = "/qqlx/wmss/order";
export type postOrderDto = { schema: Order; skuList?: Sku[]; feeList?: Fee[] };
export type postOrderRes = Order;

export type OrderInView = Order & {
	// joinParentOrder?: Order;

	joinCreator?: User;
	joinContact?: Contact;
	joinManager?: User;
	joinAccounter?: User;

	joinSku?: Sku[];
	joinFee?: Fee[];
};
export type OrderInSearch = Order & {
	joinContact?: Contact;
};

export type getOrderDto = {
	sortByAmount?: MongodbSort;
	sortByAmountBookOfOrder?: MongodbSort;
	sortByAmountBookOfOrderRest?: MongodbSort;

	/** 是否可复核 */
	managerIdRequired?: boolean;
	/** 是否可结清 */
	accounterIdIdRequired?: boolean;

	page: MongodbPage;
	search: Order;
};
export type getOrderRes = MongodbPageRes<OrderInView>;

export type putOrderDto = { entity: Order; skuList?: Sku[]; feeList?: Fee[] };
export type putOrderRes = Order;

export type deleteOrderDto = { orderId: string };
export type deleteOrderRes = null;
