import type { PgBaseSchema, VARCHAR50_PG } from "../_/db.pg";
import type { UserWeChat, UserTelecom } from "./schema";

/** 非泄密的用户信息 */
export type UserInfo = {
    uid: string;

    jwt?: string;
    joinWeChat?: UserWeChat;
    joinTelecom?: UserTelecom;
};

export const PATH_USER_WECHAT = "/stream/user/wechat";
export type postUserWeChatDto = { wechatResponseCode: string; isWxmp?: boolean };
export type postUserWeChatRes = UserInfo;

export type getUserWeChatDto = null;
export type getUserWeChatRes = UserInfo;

export type patchUserWeChatDto = UserWeChat & { clientPhoneCode?: string };
export type patchUserWeChatRes = null;

export const PATH_USER_TELECOM = "/stream/user/telecom";
export type postUserTelecomDto = { phone: VARCHAR50_PG };
export type postUserTelecomRes = UserInfo;
