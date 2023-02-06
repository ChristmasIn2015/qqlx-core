import { MongodbBase } from "../../utils/database";

/** 商品重量、数量汇总，名称规格全量不重复 */
export type CabinetUnit = {
	/** @foreign */
	corpId: string;

	/** @foreign */
	cabinetId: string;

	name: string;
	norm: string;
	price: number;

	poundsFinal: number;
	countFinal: number;
} & MongodbBase;
