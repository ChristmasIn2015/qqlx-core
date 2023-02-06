import { MongodbBase } from "../../utils/database";

export type BookOfOrder = {
	/** @foreign */
	bookId: string;

	/** @foreign */
	orderId: string;

	amount: number;
} & MongodbBase;
