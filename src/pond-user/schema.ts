import type { PgBaseSchema, VARCHAR50_PG } from "../_/db.pg";

export type User = { uuid: VARCHAR50_PG; } & PgBaseSchema;

/** 微信中的身份 */
export type UserWeChat = {
    uid: VARCHAR50_PG;

    /** 用户在 “开放平台” “公众平台” 唯一标识 */
    unionId: string;
    nickname: string;
    avator: string;
} & PgBaseSchema;

/** 通信运营商中的身份 */
export type UserTelecom = {
    uid: VARCHAR50_PG;

    phone: string;
} & PgBaseSchema;
