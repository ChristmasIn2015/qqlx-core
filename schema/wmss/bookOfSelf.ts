import { MongodbBase } from "../../utils/database";

export type BookOfSelf = {
	/** @foreign */
	invoiceId: string;

	/** @foreign */
	bookId: string;

	amount: number;
} & MongodbBase;
