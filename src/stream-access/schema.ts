import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { UserInfo } from "../stream-user/dto";

export enum ENUM_STREAM_ACCESS {
    /** 读取 */
    READONLY = 1001,
    /** 写入 */
    CREATE,
    /** 修改 */
    EDIT,
    /** 删除 */
    DELETE,
}

/** 某个业务中，可能有许多的身份组
 * @uid 持有者
 * @scope 指出资源范围，如 brand:corp:10001:sale
 */
export type StreamAccessGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    scope: VARCHAR255_PG;

    joinAccessList?: StreamAccess[];
    joinUserInfo?: UserInfo[];
} & PgBaseSchema;
export const RELATIONS_STREAM_ACCESS_GROUP = "stream_access_group";

/** 权限明细
 * @gid 身份组
 * @type 1.允许读取 2.允许添加/修改 3.允许删除
 */
export type StreamAccess = {
    gid: INTEGER_PG;
    type: ENUM_STREAM_ACCESS;
} & PgBaseSchema;
export const RELATIONS_STREAM_ACCESS = "stream_access";

/** 外部访客持有的身份
 * @uid 外部访客
 * @accessId 各个业务系统需要判断访问者是否具有某种权限的身份
 */
export type StreamAccessGroupUser = {
    gid: INTEGER_PG;
    uid: VARCHAR50_PG;
} & PgBaseSchema;
export const RELATIONS_STREAM_ACCESS_GROUP_USER = "stream_access_group_user";
