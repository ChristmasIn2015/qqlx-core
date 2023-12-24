import type { PondAccessGroup, PondAccess, PondAccessGroupUser } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../../_/db.pg";

export const PATH_POND_ACCESS_GROUP = "/pond/access/group";
/** 每个业务系统必须保证，权限范围中的资源所有权，必须和提交者一致
 * @scope 例如 brand:corp:10001:sale 主体的所有者必须是提交者
 */
export type postPondAccessGroupDto = { schema: PondAccessGroup };
export type postPondAccessGroupRes = null;
export type getPondAccessGroupDto = { scope: VARCHAR255_PG };
export type getPondAccessGroupRes = PondAccessGroup[];
export type putPondAccessGroupDto = { entity: PondAccessGroup };
export type putPondAccessGroupRes = null;
export type deletePondAccessGroupDto = { id: INTEGER_PG };
export type deletePondAccessGroupRes = null;

export const PATH_POND_ACCESS = "/pond/access";
export const DROPLET_POND_ACCESS = PATH_POND_ACCESS.replace(/\//, "").replace(/\//, ":");
/** 资源范围中的所有者才能添加/删除具体的权限明细 */
export type postPondAccessDto = { schema: PondAccess };
export type postPondAccessRes = null;
export type deletePondAccessDto = { id: INTEGER_PG };
export type deletePondAccessRes = null;

export const PATH_POND_ACCESS_GROUP_USER = "/pond/access/group/user";
/** 资源范围中的所有者才能添加/删除具体的外部访客
 * @important 一般会把这个实体交给各个业务系统，业务系统再通过身份组微服务去判断发起者是否有权限进一步在业务系统中继续操作
 */
export type postPondAccessGroupUserDto = { schema: PondAccessGroupUser };
export type postPondAccessGroupUserRes = null;
export type deletePondAccessGroupUserDto = { id: INTEGER_PG };
export type deletePondAccessGroupUserRes = null;
