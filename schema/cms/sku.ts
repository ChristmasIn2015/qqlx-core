import type { MongodbBase } from "../../utils/database";

/** 订单明细 */
export type Sku = {
	/** @foreign */
	corpId: string;
	orderId: string;

	name: string;
	desc: string;
	images: string;
	price: number;

	count: number
} & MongodbBase;
