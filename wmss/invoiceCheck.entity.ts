import { SubjectContact, Subject } from "../brand/entity";
import { MongodbBase } from "../utils/database";
import { User } from "../user/entity";

import { LedgerScope, LedgerType } from "./enum";

/** 财务签字的 (根据收付款单) 发票凭证，用于其他部门二次确认
 * @ledgerScope 应收账款（借）开出销项发票 应付账款（贷）收到进项发票
 */
export type InvoiceCheck = {
	creatorId: string;
	ledgerId: string;
	ledgerType: LedgerType;
	ledgerScope: LedgerScope;
	ledgerKeyOrigin: string;

	code: string;
	amount: number;
} & MongodbBase;

/** 发票中的 (收付款单) 明细 */
export type InvoiceCheckDetail = {
	orderCheckId: string;
	amount: number;
} & MongodbBase;
