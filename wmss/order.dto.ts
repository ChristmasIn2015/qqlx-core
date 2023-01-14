import { ObjectId } from "mongodb";
import { SubjectContact, Warehouse } from "../brand/entity";
import { User } from "../user/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";
import { Order, OrderFee } from "./order.entity";

import { SkuJoined } from "./sku.dto";
import { Sku } from "./sku.entity";

export const ORDER_PATH = "/qqlx/wmss/order";
/** 包含了钱货票等信息 */
export type OrderJoined = {
	joinCreator?: User;
	joinContact?: SubjectContact;
	joinCharger: User;

	/** 包含的Sku */
	joinSku?: SkuJoined[];
	/** 包含的费用 */
	joinOrderFee?: OrderFee[];
	/** 来源订单 */
	joinFromOrder?: Order;
} & Order;
export type postOrderDto = { entity: Order; skuList?: Sku[]; orderFeeList?: OrderFee[] };
export type postOrderRes = Order;

/** 默认按添加时间降序搜索 */
export type getOrderDto = {
	sortByAmount?: MongodbSort;
	sortByAmountInvoiceDetail?: MongodbSort;
	sortByAmountOrderCheckDetail?: MongodbSort;

	entityIds?: ObjectId[];
	entity?: Order;
	page?: MongodbQuery<null>;
};
export type getOrderRes = MongodbQuery<OrderJoined>;

export type putOrderDto = { entity: Order; skuList?: Sku[]; orderFeeList?: OrderFee[] };
export type putOrderRes = Order;

export const ORDER_FEE_PATH = "/qqlx/wmss/order/fee";
