import { MongodbBase } from "../../utils/database";

export type BookOfSelf = {
	/** @foreign */
	bookId: string;

	/** @foreign */
	selfId: string;

	amount: number;
} & MongodbBase;
