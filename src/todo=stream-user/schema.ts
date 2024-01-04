import type { PgBaseSchema, VARCHAR50_PG } from "../../_/db.pg";

export type _Owner = {
    /** 32位uuid 用于唯一标识用户 */
    uuid32: VARCHAR50_PG;
}

export type StreamUser = PgBaseSchema & _Owner & {
    joinUserWeChat?: UserWeChat;
    joinUserTelecom?: UserTelecom;
};
export const RELATIONS_STREAM_USER = "stream_user";

/** 微信中的身份
 * @unionId 用户在 “开放平台” “公众平台” 唯一标识
*/
export type UserWeChat = PgBaseSchema & _Owner & {
    unionId: string;
    nickname: string;
    avator: string;
};
export const RELATIONS_STREAM_USER_WECHAT = "stream_user_wechat";

/** 通信运营商中的身份 */
export type UserTelecom = PgBaseSchema & _Owner & {
    phone: string;
}
export const RELATIONS_STREAM_USER_TELECOM = "stream_user_telecom";
