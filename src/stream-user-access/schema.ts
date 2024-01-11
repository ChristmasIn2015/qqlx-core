import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, VARCHAR255_PG, SMALLINT_PG } from "../../_/db.pg";
import { UserInfo } from "../stream-user/dto";
import type { _Owner } from "../stream-user/schema";

/** 某个业务中，可能有许多的身份组
 * @scope 指出资源范围，如 brand:corp:10001:sale，只有所有者，才能对资源进行授权
 * @droit 权限的二进制数字，它是一个从二进制转换的十进制数字
 * @droit 前四位是预留位置，后四位代表着:添加删除修改查询
 * @droit 如 9 代表着 0000,1001 代表着此用户仅有添加和查询权限
 * @sequence 显示顺序
 */
export type StreamUserAccessGroup = PgBaseSchema & _Owner & {
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    scope: VARCHAR255_PG;
    droit: SMALLINT_PG;
    sequence: SMALLINT_PG;

    joinOwner?: UserInfo;
};
export const RELATIONS_STREAM_USER_ACCESS_GROUP = "stream_user_access_group";


/** 哪些外部访客在群组中 */
export type StreamUserAccess = PgBaseSchema & _Owner & {
    gid: INTEGER_PG;

    joinOwner?: UserInfo;
    joinStreamUserAccessGroup?: StreamUserAccessGroup
};
export const RELATIONS_STREAM_USER_ACCESS = "stream_user_access";