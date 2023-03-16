import type { MongodbBase } from "../../utils/database";

/** 打卡分类箱 */
export type Box = {
	/** @foreign */
	corpId: string;

	name: string;
	desc: string;
	images: string;

	isDisabled: boolean;
} & MongodbBase;
