import type { MongodbBase } from "../../utils/database";

export type Order = {
	/** @foreign */
	corpId: string;

	/** @foreign */
	parentOrderId: string;
	parentOrderType: ENUM_ORDER;

	/** @foreign */
	creatorId: string;
	/** @foreign */
	contactId: string;
	/** @foreign 销售/采购负责人签字 */
	managerId: string;
	/** @foreign 钱货结清后，财务负责人签字 */
	accounterId: string;

	type: ENUM_ORDER;
	code: string;
	amount: number;
	remark: string;
	isDisabled: boolean;

	/** 此订单开出了多少金额的收付款证明 @以后需要拆分出去 */
	amountBookOfOrder: number;
	amountBookOfOrderRest: number;
} & MongodbBase;

/** 单据分类 */
export enum ENUM_ORDER {
	/** 无 */
	NONE = 0,
	/** 采购单，SKU不需要进行确认 */
	PURCHASE = 2000,
	/** 销售单，SKU不需要进行确认 */
	SALES = 3000,
	/** 入库单，SKU确认时，需要根据 @name @norm 创建对应 cabinetUnit */
	GETIN = 4001,
	/** 加工单，SKU确认时，需要根据 @name @norm 创建对应 cabinetUnit */
	PROCESS = 4002,
	/** 发货单，SKU确认时，需要重新计算 @deductionSku （如果有） 和 @cabinetUnit */
	GETOUT = 4003,
	/** 领料单，SKU确认时，需要重新计算 @deductionSku （如果有） 和 @cabinetUnit */
	MATERIAL = 4004,
}

export const MAP_ENUM_ORDER = [
	{ text: "异常", value: ENUM_ORDER.NONE },
	{ text: "采购单", value: ENUM_ORDER.PURCHASE },
	{ text: "销售单", value: ENUM_ORDER.SALES },
	{ text: "入库单", value: ENUM_ORDER.GETIN },
	{ text: "加工单", value: ENUM_ORDER.PROCESS },
	{ text: "发货单", value: ENUM_ORDER.GETOUT },
	{ text: "领料单", value: ENUM_ORDER.MATERIAL },
];
