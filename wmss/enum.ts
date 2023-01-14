/** 单据分类 */
export enum OrderType {
	/** 采购单 */
	PURCHASE = 1,
	/** 销售单 */
	SALES = 2,
	/** 加工单 */
	PROCESS = 3,
	/** 材料单 */
	MATERIAL = 4,
	/** 入库单 */
	GETIN = 5001,
	/** 发货单 */
	GETOUT = 5002,
}

/** Sku的统计方法 */
export enum CountWay {
	/** 加权平均法（默认） */
	WEIGHTED_AVERAGE = 1,
	/** 先进先出法 */
	SPECIFIC_IDENTIFICATION,
}

/** Sku的智能称重方法 */
export enum PoundsWay {
	/** 无 */
	NONE = 1,
	/** 薄钢板理算 厚度mm*宽度mm*长度mm */
	SPECIFIC_IDENTIFICATION,
}

/** 会计分录 借贷方向 */
export enum LedgerType {
	/** 借 */
	J = 1,
	/** 贷 */
	D,
}

/** 会计分录 */
export enum LedgerScope {
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
