import { ObjectId } from "mongodb";
import { SubjectContact, Subject } from "../brand/entity";
import { MongodbBase } from "../utils/database";
import { User } from "../user/entity";

import { LedgerScope, LedgerType } from "./enum";

/** 会计账簿 */
export type Ledger = {
	subjectId: ObjectId;
	type: LedgerType;
	scope: LedgerScope;

	code: string;
	remark: string;
	amount: number;

	/** 用户自定义编号 */
	keyCode: string;
	/** 资金从哪来 */
	keyOrigin: string;
	/** 资金现在在哪个银行 */
	keyHouse: string;

	/** （收付款单）统计 */
	amountOrderCheck: number;
	amountOrderCheckRate: number;
} & MongodbBase;
