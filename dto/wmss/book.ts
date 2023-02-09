import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import { Corp } from "../../schema/brand/corp";
import { Book } from "../../schema/wmss/book";
import { BookOfOrder } from "../../schema/wmss/bookOfOrder";
import { BookOfSelf } from "../../schema/wmss/bookOfSelf";
import { OrderInSearch } from "../../dto/wmss/order";

export const PATH_BOOK = "/qqlx/wmss/book";
export type postBookDto = { excels: Book[] };
export type postBookRes = null;

export type BookOfOrderInView = BookOfOrder & { joinOrder: OrderInSearch };
export type BookOfSelfInView = BookOfSelf & { joinBook: Book };
export type BookInView = Book & {
	joinOfOrder: BookOfOrderInView[];
};
export type getBookDto = {
	sortByAmount?: MongodbSort;
	sortByAmountBookOfOrder?: MongodbSort;
	sortByAmountBookOfOrderRest?: MongodbSort;
	sortByAmountBookOfSelf?: MongodbSort;
	sortByAmountBookOfSelfRest?: MongodbSort;

	search: Book;
	page: MongodbPage;
};
export type getBookRes = MongodbPageRes<BookInView>;

export type patchBookDto = Book;
export type patchBookRes = null;

export type deleteBookDto = { bookId: string };
export type deleteBookRes = null;
