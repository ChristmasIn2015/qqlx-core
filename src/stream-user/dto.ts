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
export type getStreamUserDto = null // 获取当前用户信息
export type getStreamUserRes = { authorization: string };
export type putStreamUserDto = { timeExpire: number }; // 指定登录失效时间
export type putStreamUserRes = { authorization: string };

// 微信登录
export const PATH_STREAM_USER_WECHAT = "/stream/user/wechat";
export type postStreamUserWeChatDto = { codeByWeChatRemote: string; isWxmp?: boolean };
export type postStreamUserWeChatRes = { authorization: string };
export type putStreamUserWeChatDto = UserWeChat & { codeByWeChatClient?: string };
export type putStreamUserWeChatRes = null;

// 手机号登录
export const PATH_STREAM_USER_TELECOM = "/stream/user/telecom";
export type postStreamUserTelecomDto = { code: string; phone: VARCHAR50_PG };
export type postStreamUserTelecomRes = { authorization: string };
export type putStreamUserTelecomDto = { code: string; phone: VARCHAR50_PG };
export type putStreamUserTelecomRes = null;

export const PATH_STREAM_USER_TELECOM_CODE = "/stream/user/telecom/code";
export type getStreamUserTelecomCodeDto = { phone: VARCHAR50_PG }
export type getStreamUserTelecomCodeRes = null

// 邮箱登录
export const PATH_STREAM_USER_EMAIL = "/stream/user/email";
export type postStreamUserEmailDto = { code: string; email: VARCHAR50_PG };
export type postStreamUserEmailRes = { authorization: string };
export type putStreamUserEmailDto = { code: string; email: VARCHAR50_PG };
export type putStreamUserEmailRes = null;

export const PATH_STREAM_USER_EMAIL_CODE = "/stream/user/email/code";
export type getStreamUserEmailCodeDto = { email: VARCHAR50_PG }
export type getStreamUserEmailCodeRes = null
