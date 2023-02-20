import type { MongodbBase } from "../../utils/database";

export type Book = {
	/** @foreign */
	corpId: string;

	type: ENUM_BOOK_TYPE;
	direction: ENUM_BOOK_DIRECTION;

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

	/** 此流水开出了多少金额的收付款证明 @以后需要拆分出去 */
	amountBookOfOrder: number;
	amountBookOfOrderRest: number;

	/** 此流水开出了多少金额的发票证明 @以后需要拆分出去 */
	amountBookOfSelf: number;
	amountBookOfSelfRest: number;
} & MongodbBase;

/** 会计分录 借贷方向 */
export enum ENUM_BOOK_DIRECTION {
	/** 借 */
	JIE = 1,
	/** 贷 */
	DAI,
}

/** 会计分录 */
export enum ENUM_BOOK_TYPE {
	/** 应收账款 1122 纸面货款 01（J 销售单 D 收到货款）*/
	YSZK = 112201,
	/** 应收账款 1122 开票货款 02（J 开出销项发票 D 收到货款）*/
	YSZK_VAT = 112202,
	/** 其他应收款 1231 单位 01（J 借钱给单位 D 单位还钱）*/
	// QTYSK = 123101,

	/** 短期借款 2001 信誉保证 01（J 还钱给别人 D 向别人借钱） */
	// DQJK = 200101,
	/** 应付账款 2202 纸面货款 01（J 付货款 D 采购单） */
	YFZK = 220201,
	/** 应付账款 2202 收票货款 02（J 付货款 D 收到进项发票） */
	YFZK_VAT = 220202,
}
