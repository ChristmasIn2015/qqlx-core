import type { PgBaseSchema, VARCHAR50_PG } from "../../_/db.pg";
import type { UserWeChat, UserTelecom, UserEmail } from "./schema";

/** 非泄密的用户信息 */
export type UserInfo = {
    uuid32: string;

    joinWeChatList?: UserWeChat[];
    joinTelecomList?: UserTelecom[];
    joinEmailList?: UserEmail[];
};

export const PATH_STREAM_USER = "/stream/user";
export const DROPLET_STREAM_USER = "stream:user";
export type getStreamUserDto = null // 获取当前用户信息
export type getStreamUserRes = UserInfo;
export type putStreamUserDto = { timeExpire: number }; // 指定登录失效时间，相当于重新登陆
export type putStreamUserRes = { authorization: string };

// 微信信息修改
export type putStreamUserWeChatDto = UserWeChat & { codeByWeChatClient?: string };
export type putStreamUserWeChatRes = null;

// 微信网页登录
export const PATH_STREAM_USER_WECHAT_BROWER = "/stream/user/wechat/brower";
export type postStreamUserWeChatBrowerDto = { code: string };
export type postStreamUserWeChatBrowerRes = { authorization: string };

// 微信小程序登录
export const PATH_STREAM_USER_WECHAT_MINI = "/stream/user/wechat/mini";
export type postStreamUserWeChatMiniDto = { code: string };
export type postStreamUserWeChatMiniRes = { authorization: string };

// 手机号登录
export const PATH_STREAM_USER_TELECOM = "/stream/user/telecom";
export type postStreamUserTelecomDto = { code: string };
export type postStreamUserTelecomRes = { authorization: string };

export const PATH_STREAM_USER_TELECOM_CODE = "/stream/user/telecom/code";
export type patchStreamUserTelecomCodeDto = { phone: VARCHAR50_PG }
export type patchStreamUserTelecomCodeRes = null

// 邮箱登录
export const PATH_STREAM_USER_EMAIL = "/stream/user/email";
export type postStreamUserEmailDto = { code: string };
export type postStreamUserEmailRes = { authorization: string };
export type putStreamUserEmailDto = { code: string };
export type putStreamUserEmailRes = null;

export const PATH_STREAM_USER_EMAIL_CODE = "/stream/user/email/code";
export type patchStreamUserEmailCodeDto = { email: VARCHAR50_PG }
export type patchStreamUserEmailCodeRes = null
