import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { Contact } from "../../schema/brand/contact";
import type { Order } from "../../schema/wmss/order";
import type { Book } from "../../schema/wmss/book";
import type { BookOfOrder } from "../../schema/wmss/bookOfOrder";
import type { BookOfSelf } from "../../schema/wmss/bookOfSelf";

export const PATH_BOOK = "/qqlx/wmss/book";
export type postBookDto = { excels: Book[] };
export type postBookRes = null;

export type BookOfOrderInView = BookOfOrder & { joinOrder?: Order; joinContact?: Contact };
export type BookInView = Book & {
	joinBookOfOrder?: BookOfOrderInView[];
};
export type getBookDto = {
	sortKey?: string;
	sortValue?: MongodbSort;

	search: Book;
	page: MongodbPage;
};
export type getBookRes = MongodbPageRes<BookInView>;

export type putBookDto = { entity: Book; orders?: Order[] };
export type putBookRes = null;

export type deleteBookDto = { bookIds: string[] };
export type deleteBookRes = null;
