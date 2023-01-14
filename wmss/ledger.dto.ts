import { ObjectId } from "mongodb";
import { Subject } from "../brand/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";

import { Ledger } from "./ledger.entity";
import { OrderCheck, OrderChecking } from "./orderCheck.entity";

export const LEDGER_PATH = "/qqlx/wmss/ledger";
export type postLedgerDto = { entityList: Ledger[] };
export type postLedgerRes = null;

export type LedgerJoined = {
	/** 抬头 */
	joinSubject?: Subject;
	/** 财务凭证（收付款单）统计 */
	joinCheckList?: OrderCheck[];
} & Ledger;
export type getLedgerDto = {
	sortByAmount?: MongodbSort;
	sortByAmountOrderCheck?: MongodbSort;
	sortByAmountOrderCheckRate?: MongodbSort;

	entityIds?: ObjectId[];
	entity?: Ledger;
	page?: MongodbQuery<null>;
};
export type getLedgerRes = MongodbQuery<LedgerJoined>;

export type patchLedgerDto = Ledger;
export type patchLedgerRes = null;
