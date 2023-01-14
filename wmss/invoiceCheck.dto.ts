import { ObjectId } from "mongodb";
import { Subject } from "../brand/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";

import { Ledger } from "./ledger.entity";
import { InvoiceCheck, InvoiceCheckDetail } from "./invoiceCheck.entity";
import { OrderCheck } from "./orderCheck.entity";

export type postCheckDto = { entity: InvoiceCheck; invoiceCheckDetailList: InvoiceCheckDetail[] };
export type postCheckRes = null;

export type InvoiceCheckJoined = {
	joinCreator?: Subject;
	joinLedger?: Ledger;
	joinInvoiceCheckDetailList?: ({ joinOrderCheck?: OrderCheck } & InvoiceCheckDetail)[];
} & InvoiceCheck;
export type getInvoiceCheckDto = {
	sortByAmountOrder?: MongodbSort;
	sortByAmountInvoice?: MongodbSort;
	sortByAmountInvoiceRate?: MongodbSort;

	entityIds?: ObjectId[];
	entity?: InvoiceCheck;
	page?: MongodbQuery<null>;
};
export type getCheckRes = MongodbQuery<InvoiceCheckJoined>;

export type patchCheckDto = { entity: InvoiceCheck; invoiceCheckDetailList: InvoiceCheckDetail[] };
export type patchCheckRes = null;
