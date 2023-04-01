import type { MongodbBase } from "qqlx-cdk";

export type User = {
    phone: string;
    jwt: string;
} & MongodbBase;

export type UserWeChat = {
    /** @foreign */
    userId: string;

    /** 用户在 “开放平台” “公众平台” 唯一标识 */
    unionId: string;

    nickname: string;
    avator: string;
} & MongodbBase;
