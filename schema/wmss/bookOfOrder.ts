import type { MongodbBase } from "../../utils/database";

export type BookOfOrder = {
	/** @foreign */
	bookId: string;

	/** @foreign */
	orderId: string;
	orderContactId: string;

	amount: number;
} & MongodbBase;
