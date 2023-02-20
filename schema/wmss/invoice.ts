import type { MongodbBase } from "../../utils/database";
import { ENUM_BOOK_DIRECTION, ENUM_BOOK_TYPE } from "./book";

export type Invoice = {
	/** @foreign */
	corpId: string;

	type: ENUM_BOOK_TYPE;
	direction: ENUM_BOOK_DIRECTION;

	/** @foreign 业务抬头 */
	headerId: string;
	code: string;
	amount: number;
	remark: string;
	isDisabled: Boolean;

	/** 用户自定义编号 */
	keyCode: string;
	/** 资金从哪来，一般是客户名称 */
	keyOrigin: string;
	/** 资金现在在哪个银行 */
	keyHouse: string;

	/** 此发票开出了多少金额的流水 @以后需要拆分出去 */
	amountBookOfSelf: number;
	amountBookOfSelfRest: number;
} & MongodbBase;
