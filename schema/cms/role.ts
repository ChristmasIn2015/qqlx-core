import type { MongodbBase } from "../../utils/database";

export type RoleCMS = {
	/** @foreign */
	corpId: string;
	/** @foreign */
	userId: string;

	role: ENUM_ROLE_CMS;
} & MongodbBase;

/** 电商后台角色 */
export enum ENUM_ROLE_CMS {
	/** 管理员 */
	ROOT = 1,

	/** 基础权限 */
	BASE,

	/** 访客权限 */
	VISITOR,
}
