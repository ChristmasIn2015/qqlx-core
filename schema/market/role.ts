import { MongodbBase } from "../../utils/database";

export const enum ENUM_ROLE_MARKET {
	/** 无 */
	NONE = 1000,
	/** 运营的超级管理员 */
	ROOT = 1001,
}
export const MAP_ENUM_ROLE_MARKET = [
	{ key: "", value: ENUM_ROLE_MARKET.NONE, text: "普通用户" },
	{ key: "", value: ENUM_ROLE_MARKET.ROOT, text: "管理员" },
];

export type RoleMarket = {
	/** @foreign */
	userId: string;

	role: ENUM_ROLE_MARKET;
} & MongodbBase;
