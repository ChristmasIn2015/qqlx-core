import type { MongodbBase } from "../../utils/database";

export type RoleDevops = {
	/** @foreign */
	userId: string;

	role: ENUM_ROLE_DEVOPS;
} & MongodbBase;

export const enum ENUM_ROLE_DEVOPS {
	/** 使用系统的普通用户 */
	NONE = 1000,
	/** 运维的超级管理员 */
	ROOT = 1001,
}
export const MAP_ENUM_ROLE_DEVOPS = [
	{ key: "", value: ENUM_ROLE_DEVOPS.NONE, text: "普通用户" },
	{ key: "", value: ENUM_ROLE_DEVOPS.ROOT, text: "管理员" },
];
