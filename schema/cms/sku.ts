import type { MongodbBase } from "../../utils/database";

export type Sku = {
	/** @foreign */
	corpId: string;
	orderId: string;

	name: string;
	desc: string;
	images: string;
	price: number;
} & MongodbBase;
