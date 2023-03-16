import type { MongodbBase } from "../../utils/database";

/** 电商订单 */
export type Order = {
	/** @foreign */
	corpId: string;

	/** 其他用户userId */
	contactId: string;

	type: ENUM_CMS_ORDER;
	amount: number;
	remark: string;
	isDisabled: boolean;
} & MongodbBase;

/** 电商订单类型 */
export enum ENUM_CMS_ORDER {
	CLIENT = 1,
}
