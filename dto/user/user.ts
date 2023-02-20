import type { User } from "../../schema/user/user";
import type { UserWeChat } from "../../schema/user/userWeChat";
import type { RoleMarket } from "../../schema/market/role";
import type { RoleWMSS } from "../../schema/wmss/role";

export type UserRoleJoined = User & {
	joinWeChat: UserWeChat;
	joinRoleMarket: RoleMarket;
	joinRoleWMSS: RoleWMSS;
};

export const PATH_USER = "/qqlx/user/wechat";
export type postUserWeChatDto = { wechatResponseCode: string };
export type postUserWeChatRes = User & UserWeChat;

export type getUserWeChatDto = null;
export type getUserWeChatRes = UserWeChat;

export type patchUserWeChatDto = UserWeChat;
export type patchUserWeChatRes = UserWeChat;
