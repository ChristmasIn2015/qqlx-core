import { MongodbBase } from "../../utils/database";

/** @primary */
export type Corp = {
	/** @foreign */
	userId: string;

	type: ENUM_CORP;
	name: string;
	address: string;
	isDisabled: boolean;
} & MongodbBase;

export const enum ENUM_CORP {
	/** 未认证 */
	NONE,
	/** 个体户 */
	STUDIO,
	/** 公司 */
	COMPANY,
}
export const MAP_ENUM_CORP = [
	{ key: "", value: ENUM_CORP.NONE, text: "未认证" },
	{ key: "", value: ENUM_CORP.STUDIO, text: "个体户" },
	{ key: "", value: ENUM_CORP.COMPANY, text: "公司" },
];
