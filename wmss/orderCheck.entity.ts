import { SubjectContact, Subject } from "../brand/entity";
import { MongodbBase } from "../utils/database";
import { User } from "../user/entity";

import { LedgerScope, LedgerType } from "./enum";

/** 财务签字的货款凭证，用于其他部门二次确认
 * @ledgerScope 应收账款（贷）说明是收款单 应付账款（借）则是付款单
 */
export type OrderCheck = {
	creatorId: string;
	ledgerId: string;
	ledgerType: LedgerType;
	ledgerScope: LedgerScope;
	ledgerKeyOrigin: string;

	code: string;
	amount: number;
} & MongodbBase;

/** 货款凭证的订单明细 */
export type OrderCheckDetail = {
	checkId: string;
	orderId: string;
	amount: number;
} & MongodbBase;
