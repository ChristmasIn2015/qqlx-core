import type { PgBaseSchema, VARCHAR50_PG } from "../../_/db.pg";

export type StreamUser = {
    uid: VARCHAR50_PG;

    joinUserWeChat?: UserWeChat;
    joinUserTelecom?: UserTelecom;
} & PgBaseSchema;
export const RELATIONS_STREAM_USER = "stream_user";

/** 微信中的身份 */
export type UserWeChat = {
    uid: VARCHAR50_PG;

    /** 用户在 “开放平台” “公众平台” 唯一标识 */
    unionId: string;
    nickname: string;
    avator: string;
} & PgBaseSchema;
export const RELATIONS_STREAM_USER_WECHAT = "stream_user_wechat";

/** 通信运营商中的身份 */
export type UserTelecom = {
    uid: VARCHAR50_PG;

    phone: string;
} & PgBaseSchema;
export const RELATIONS_STREAM_USER_TELECOM = "stream_user_telecom";
