import type { PgBaseSchema, VARCHAR50_PG } from "../_/db.pg";
import type { UserWeChat, UserTelecom } from "./schema";

/** 非泄密的用户信息 */
export type UserInfo = {
    uid: string;

    joinWeChat?: UserWeChat;
    joinTelecom?: UserTelecom;
};

export const DROPLET_STREAM_USER = "stream:user";
export const PATH_USER = "/stream/user";
export type getStreamUserDto = { Authorization?: string };
export type getStreamUserRes = UserInfo;

export const PATH_USER_WECHAT = "/stream/user/wechat";
export type postStreamUserWeChatDto = { codeByWeChatRemote: string; isWxmp?: boolean };
export type postStreamUserWeChatRes = UserInfo & { jwt?: string };
export type patchStreamUserWeChatDto = UserWeChat & { codeByWeChatClient?: string };
export type patchStreamUserWeChatRes = null;

export const PATH_USER_TELECOM = "/stream/user/telecom";
export type postStreamUserTelecomDto = { codeSMS: string; phone: VARCHAR50_PG };
export type postStreamUserTelecomRes = UserInfo;
export type patchStreamUserTelecomDto = { codeSMS: string; phone: VARCHAR50_PG };
export type patchStreamUserTelecomRes = null;
