import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { Corp } from "../../schema/brand/corp";
import type { Book } from "../../schema/wmss/book";
import type { Invoice } from "../../schema/wmss/invoice";
import type { BookOfSelf } from "../../schema/wmss/bookOfSelf";

export const PATH_INVOICE = "/qqlx/wmss/invoice";
export type postInvoiceDto = { excels: Invoice[] };
export type postInvoiceRes = Invoice[];

export type BookOfSelfInView = BookOfSelf & { joinBook?: Book };
export type InvoiceInView = Invoice & {
	joinHeader?: Corp;
	joinBookOfSelf?: BookOfSelfInView[];
};
export type getInvoiceDto = {
	sortKey?: string;
	sortValue?: MongodbSort;

	search: Invoice;
	page: MongodbPage;
};
export type getInvoiceRes = MongodbPageRes<InvoiceInView>;

export type putInvoiceDto = { entity: Invoice; books?: Book[] };
export type putInvoiceRes = null;

export type deleteInvoiceDto = { invoiceIds: string[] };
export type deleteInvoiceRes = null;
