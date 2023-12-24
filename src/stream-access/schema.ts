import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { UserInfo } from "../stream-user/dto";

export enum ENUM_POND_ACCESS {
    /** 读取 */
    READONLY = 1001,
    /** 写入/修改 */
    WRITE,
    /** 删除 */
    DELETE,
}

/** 某个业务中，可能有许多的身份组
 * @uid 持有者
 * @scope 指出资源范围，如 brand:corp:10001:sale
 */
export type PondAccessGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    scope: VARCHAR255_PG;

    joinIdentities?: PondAccess[];
    joinUserInfo?: UserInfo[];
} & PgBaseSchema;
export const RELATIONS_POND_ACCESS_GROUP = "pond_access_group";

/** 权限明细
 * @gid 身份组
 * @type 1.允许读取 2.允许添加/修改 3.允许删除
 */
export type PondAccess = {
    gid: INTEGER_PG;
    type: ENUM_POND_ACCESS;
} & PgBaseSchema;
export const RELATIONS_POND_ACCESS = "pond_access";

/** 外部访客持有的身份
 * @uid 外部访客
 * @accessId 各个业务系统需要判断访问者是否具有某种权限的身份
 */
export type PondAccessGroupUser = {
    gid: INTEGER_PG;
    uid: VARCHAR50_PG;
} & PgBaseSchema;
export const RELATIONS_POND_ACCESS_GROUP_USER = "pond_access_group_user";
