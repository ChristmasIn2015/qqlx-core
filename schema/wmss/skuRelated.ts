import { MongodbBase } from "../../utils/database";

export type SkuRelated = {
	/** @foreign */
	corpId: string;

	/** @foreign 当前所在仓库 */
	warehouseId: string;

	/** @foreign */
	skuId: string;

	/** @foreign */
	orderId: string;
	orderContactId: string;

	/** @foreign 领料、发货选择的其他商品 */
	deductionSkuId: string;
	deductionPounds: number;
	deductionCount: number;
} & MongodbBase;
