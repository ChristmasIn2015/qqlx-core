import { MongodbBase } from "../utils/database";
import { UserScope } from "./enum";

export type User = {
	nickname: string;
	avator: string;
	phone: string;
	scope: UserScope;
	/** 联系方式 */
	contact: string;
} & MongodbBase;

/** @related */
export type UserWeChat = {
	userId: string;
	/** 主体在 “开放平台” “公众平台” 唯一标识 */
	unionId: string;
	/** 主体在某个应用下的唯一标识 */
	openId: string;
	/** 主体在某个应用下的唯一标识 */
	jwt: string;
} & MongodbBase;
