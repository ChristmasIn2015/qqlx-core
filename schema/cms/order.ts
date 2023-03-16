import type { MongodbBase } from "../../utils/database";

/** 电商订单 */
export type Order = {
	/** @foreign */
	corpId: string;
	creator: string;

	type: ENUM_CMS_ORDER;
	price: number;
	remark: string;
	isDisabled: boolean;
} & MongodbBase;

/** 电商订单类型 */
export enum ENUM_CMS_ORDER {
	CLIENT = 1,
}
