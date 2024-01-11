import type { PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../../_/db.pg";


/** 唯一用户 */
export type StreamUser = PgBaseSchema & _Owner & {
    joinWeChatList?: UserWeChat[];
    joinTelecomList?: UserTelecom[];
    joinEmailList?: UserEmail[];
};
export const RELATIONS_STREAM_USER = "stream_user";

/** 资源是哪个用户的 */
export type _Owner = { uuid32: VARCHAR50_PG; }


/** 微信中的身份
 * @unionId 用户在 “开放平台” “公众平台” 唯一标识
*/
export type UserWeChat = PgBaseSchema & _Owner & {
    unionId: VARCHAR50_PG;
    nickname: VARCHAR50_PG;
    avator: VARCHAR255_PG;

    joinStreamUser?: StreamUser
};
export const RELATIONS_STREAM_USER_WECHAT = "stream_user_wechat";

/** 通信运营商中的身份 */
export type UserTelecom = PgBaseSchema & _Owner & {
    phone: VARCHAR50_PG;

    joinStreamUser?: StreamUser
}
export const RELATIONS_STREAM_USER_TELECOM = "stream_user_telecom";

/** 邮箱中的身份 */
export type UserEmail = PgBaseSchema & _Owner & {
    email: VARCHAR50_PG;

    joinStreamUser?: StreamUser
}
export const RELATIONS_STREAM_USER_EMAIL = "stream_user_email";
