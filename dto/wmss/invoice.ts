import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import { Corp } from "../../schema/brand/corp";
import { Book } from "../../schema/wmss/book";
import { Invoice } from "../../schema/wmss/invoice";
import { BookOfSelf } from "../../schema/wmss/bookOfSelf";
import { BookOfSelfInView } from "../../dto/wmss/book";

export const PATH_BOOK = "/qqlx/wmss/invoice";
export type postInvoiceDto = { excels: Invoice[] };
export type postInvoiceRes = null;

export type InvoiceInView = Invoice & {
	joinCorp: Corp;
	joinOfSelf: BookOfSelfInView[];
};
export type getInvoiceDto = {
	sortByAmount?: MongodbSort;
	sortByAmountBookOfSelf?: MongodbSort;
	sortByAmountBookOfSelfRest?: MongodbSort;

	search: Invoice;
	page: MongodbPage;
};
export type getInvoiceRes = MongodbPageRes<InvoiceInView>;

export type patchInvoiceDto = Invoice;
export type patchInvoiceRes = null;

export type deleteInvoiceDto = { invoiceId: string };
export type deleteInvoiceRes = null;
