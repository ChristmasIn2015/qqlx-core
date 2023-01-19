import { SubjectContact } from "../brand/entity";
import { MongodbBase } from "../utils/database";
import { User } from "../user/entity";

import { OrderType } from "./enum";
import { Sku } from "./sku.entity";

/** 订单 */
export type Order = {
	subjectId: string;

	/** 根据哪张订单生成的 */
	fromOrderId: string;
	fromOrderType: OrderType;

	/** 钱货结清后，负责人签字 */
	chargerId: string;
	creatorId: string;
	contactId: string;

	code: string;
	type: OrderType;
	remark: string;
	isDisabled: boolean;

	/** 费用合计 */
	amount: number;
	amountSku: number;
	amountFee: number;

	/** 收款发票合计 */
	amountInvoiceDetail: number;
	amountOrderCheckDetail: number;
} & MongodbBase;

/** 订单费用 */
export type OrderFee = {
	orderId: string;

	name: string;
	desc: string;
	amount: number;
} & MongodbBase;
