import { MongodbBase } from "../../utils/database";

export type UserWeChat = {
	/** @foreign */
	userId: string;

	/** 主体在 “开放平台” “公众平台” 唯一标识 */
	unionId: string;
	nickname: string;
	avator: string;
} & MongodbBase;
