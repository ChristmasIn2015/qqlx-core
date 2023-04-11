import { Page, PageRes, MongodbSort } from "qqlx-cdk";
import type { Contact } from "../brand/contact.schema";
import type { Order } from "./order.schema";
import type { Book, BookOfOrder, BookOfSelf, ENUM_BOOK_DIRECTION, ENUM_BOOK_TYPE } from "./book.schema";
export declare const PATH_BOOK = "/qqlx/wmss/book";
export type postBookDto = {
    excels: Book[];
};
export type postBookRes = Book[];
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
export declare const PATH_BOOK_ANALYSIS = "/qqlx/wmss/book/analysis";
export type getBookAnalysis = {
    startTime: number;
    endTime: number;
}[];
export type getBookAnalysisRes = {
    startTime: number;
    endTime: number;
    calcu: Record<ENUM_BOOK_TYPE, {
        direction: ENUM_BOOK_DIRECTION;
        amount: number;
        count: number;
    }>;
}[];
