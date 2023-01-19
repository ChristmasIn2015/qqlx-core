import { Subject } from "../brand/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";

import { Ledger } from "./ledger.entity";
import { Order } from "./order.entity";
import { OrderCheck, OrderCheckDetail } from "./orderCheck.entity";

export const ORDER_CHECK_PATH = "/qqlx/wmss/ledger/orderCheck";
export type postCheckDto = { entity: OrderCheck; orderCheckDetailList: OrderCheckDetail[] };
export type postCheckRes = null;

export type OrderCheckJoined = {
	joinCreator?: Subject;
	joinLedger?: Ledger;
	joinOrderCheckDetailList?: ({ joinOrder: Order } & OrderCheckDetail)[];
} & OrderCheck;
export type getOrderCheckDto = {
	sortByAmountOrder?: MongodbSort;
	sortByAmountInvoice?: MongodbSort;
	sortByAmountInvoiceRate?: MongodbSort;

	entityIds?: string[];
	entity?: OrderCheck;
	page?: MongodbQuery<null>;
};
export type getOrderCheckRes = MongodbQuery<OrderCheckJoined>;

export type patchOrderCheckDto = { entity: OrderCheck; orderCheckDetailList: OrderCheckDetail[] };
export type patchOrderCheckRes = null;
