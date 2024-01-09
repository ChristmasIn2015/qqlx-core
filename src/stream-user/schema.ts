import type { PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../../_/db.pg";

export type _Owner = {
    /** 32位uuid 用于唯一标识用户 */
    uuid32: VARCHAR50_PG;
}

/** 唯一用户 */
export type StreamUser = PgBaseSchema & _Owner & {
    joinWeChatList?: UserWeChat[];
    joinTelecomList?: UserTelecom[];
    joinEmailList?: UserEmail[];
};
export const RELATIONS_STREAM_USER = "stream_user";

/** 微信中的身份
 * @unionId 用户在 “开放平台” “公众平台” 唯一标识
*/
export type UserWeChat = PgBaseSchema & _Owner & {
    unionId: VARCHAR50_PG;
    nickname: VARCHAR50_PG;
    avator: VARCHAR255_PG;
};
export const RELATIONS_STREAM_USER_WECHAT = "stream_user_wechat";

/** 通信运营商中的身份 */
export type UserTelecom = PgBaseSchema & _Owner & {
    phone: VARCHAR50_PG;
}
export const RELATIONS_STREAM_USER_TELECOM = "stream_user_telecom";

/** 邮箱中的身份 */
export type UserEmail = PgBaseSchema & _Owner & {
    email: VARCHAR50_PG;
}
export const RELATIONS_STREAM_USER_EMAIL = "stream_user_email";
