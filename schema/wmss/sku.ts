import type { MongodbBase } from "../../utils/database";

import type { ENUM_LAYOUT_CABINET, ENUM_POUNDS_FORMULA } from "../../schema/wmss/cabinet";
import type { ENUM_ORDER } from "../../schema/wmss/order";

export type Sku = {
	type: ENUM_ORDER;
	name: string;
	norm: string;
	unit: string;
	remark: string;

	pounds: number;
	count: number;
	poundsFinal: number;
	countFinal: number;

	price: number;
	isConfirmed: boolean;
	isPriceInPounds: boolean;

	/** 页面中展示 ”单独发货“ 的标签 */
	layout: ENUM_LAYOUT_CABINET;
	formula: ENUM_POUNDS_FORMULA;

	/** 用户自定义编号 */
	keyCode: string;
	/** 产地：宝钢、鞍钢 */
	keyOrigin: string;
	/** 材质 HABCD */
	keyFeat: string;

	/** @foreign */
	corpId: string;

	/** @foreign 当前所在仓库 */
	warehouseId: string;

	/** @foreign */
	orderId: string;
	orderContactId: string;
	orderIsDisabled: boolean;

	/** @foreign 选择的入库、加工商品，用于领料、发货 */
	deductionSkuId: string;
} & MongodbBase;
