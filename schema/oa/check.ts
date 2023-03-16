import type { MongodbBase } from "../../utils/database";

/** 打卡记录 */
export type Check = {
	/** @foreign */
	corpId: string;
	boxId: string;
	userId: string;

	/** 当日打卡次数 */
	count: number;
} & MongodbBase;
