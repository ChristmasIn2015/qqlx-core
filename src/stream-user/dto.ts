import type { PgBaseSchema, VARCHAR50_PG } from "../../_/db.pg";
import type { UserWeChat, UserTelecom, UserEmail } from "./schema";

/** 非泄密的用户信息 */
export type UserInfo = {
    uuid32: string;

    joinWeChat?: UserWeChat;
    joinTelecom?: UserTelecom;
    joinEmail?: UserEmail;
};

export const PATH_STREAM_USER = "/stream/user";
export const DROPLET_STREAM_USER = "stream:user";
export type getStreamUserDto = { Authorization?: string };
export type getStreamUserRes = UserInfo;

export const PATH_STREAM_USER_WECHAT = "/stream/user/wechat";
export type postStreamUserWeChatDto = { codeByWeChatRemote: string; isWxmp?: boolean };
export type postStreamUserWeChatRes = UserInfo & { jwt?: string };
export type putStreamUserWeChatDto = UserWeChat & { codeByWeChatClient?: string };
export type putStreamUserWeChatRes = null;

export const PATH_STREAM_USER_TELECOM = "/stream/user/telecom";
export type postStreamUserTelecomDto = { code: string; phone: VARCHAR50_PG };
export type postStreamUserTelecomRes = UserInfo;
export type putStreamUserTelecomDto = { code: string; phone: VARCHAR50_PG };
export type putStreamUserTelecomRes = null;
// 短信验证码
export type getStreamUserTelecomCodeDto = { phone: VARCHAR50_PG }

export const PATH_STREAM_USER_EMAIL = "/stream/user/email";
export type postStreamUserEmailDto = { code: string; email: VARCHAR50_PG };
export type postStreamUserEmailRes = UserInfo;
export type putStreamUserEmailDto = { code: string; email: VARCHAR50_PG };
export type putStreamUserEmailRes = null;
// 邮箱验证码
export type getStreamUserEmailCodeDto = { email: VARCHAR50_PG }
