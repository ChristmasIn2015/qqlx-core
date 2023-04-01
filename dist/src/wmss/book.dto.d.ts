import { Page, PageRes, MongodbSort } from "qqlx-cdk";
import type { Contact } from "../brand/contact.schema";
import type { Order } from "./order.schema";
import type { Book, BookOfOrder, BookOfSelf } from "./book.schema";
export declare const PATH_BOOK = "/qqlx/wmss/book";
export type postBookDto = {
    excels: Book[];
};
export type postBookRes = null;
export type BookJoined = Book & {
    joinBookOfOrder?: Array<BookOfOrder & {
        joinOrder?: Order;
        joinContact?: Contact;
    }>;
    joinBookOfSelf?: Array<BookOfSelf & {
        joinBook?: Book;
    }>;
};
export type getBookDto = {
    search: Book;
    page: Page;
    sortKey?: string;
    sortValue?: MongodbSort;
    isAmountBookOfSelfRest: boolean;
};
export type getBookRes = PageRes<BookJoined>;
export type putBookDto = {
    entity: Book;
    orders?: Order[];
    books?: Book[];
};
export type putBookRes = null;
export type deleteBookDto = {
    bookIds: string[];
};
export type deleteBookRes = null;
