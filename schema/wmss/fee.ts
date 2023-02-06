import { MongodbBase } from "../../utils/database";

/** 订单费用 */
export type Fee = {
	orderId: string;

	name: string;
	desc: string;
	amount: number;
} & MongodbBase;
