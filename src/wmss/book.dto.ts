import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { Contact } from "../brand/contact.schema";
import type { Order } from "./order.schema";
import type { Book, BookOfOrder, ENUM_BOOK_DIRECTION, ENUM_BOOK_TYPE } from "./book.schema";

export const PATH_BOOK = "/qqlx/wmss/book";
export type postBookDto = { excels: Book[] };
export type postBookRes = Book[];

export type BookJoined = Book & {
    // 用于编辑资金的订单结清情况
    joinBookOfOrder?: Array<BookOfOrder & { joinOrder?: Order; joinContact?: Contact }>;
};
export type getBookDto = {
    search: Book;
    page: Page;

    sortKey?: string;
    sortValue?: MongodbSort;
};
export type getBookRes = PageRes<BookJoined>;

export type putBookDto = {
    entity: Book;
    orders?: Order[];
};
export type putBookRes = null;

export type deleteBookDto = { bookIds: string[] };
export type deleteBookRes = null;

export const PATH_BOOK_ANALYSIS = "/qqlx/wmss/book/analysis";

export type getBookAnalysis = {
    startTime: number;
    endTime: number;
}[];
export type getBookAnalysisRes = {
    startTime: number;
    endTime: number;
    calcu: Record<
        ENUM_BOOK_TYPE,
        {
            direction: ENUM_BOOK_DIRECTION;
            amount: number;
            count: number;
        }
    >;
}[];
