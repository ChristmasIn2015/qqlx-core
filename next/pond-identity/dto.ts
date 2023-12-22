import type { PondIdentityGroup, PondIdentity, PondIdentityGroupUser } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../_/db.pg";

export const PATH_POND_IDENTITY_GROUP = "/pond/identity/group";
/** 每个业务系统必须保证，权限范围中的资源所有权，必须和提交者一致
 * @scope 例如 brand:corp:10001:sale 主体的所有者必须是提交者
 */
export type postPondIdentityGroupDto = { schema: PondIdentityGroup };
export type postPondIdentityGroupRes = null;
export type getPondIdentityGroupDto = { scope: VARCHAR255_PG };
export type getPondIdentityGroupRes = PondIdentityGroup[];
export type putPondIdentityGroupDto = { entity: PondIdentityGroup };
export type putPondIdentityGroupRes = null;
export type deletePondIdentityGroupDto = { id: INTEGER_PG };
export type deletePondIdentityGroupRes = null;

export const PATH_POND_IDENTITY = "/pond/identity";
export const DROPLET_POND_IDENTITY = PATH_POND_IDENTITY.replace(/\//, "").replace(/\//, ":");
/** 资源范围中的所有者才能添加/删除具体的权限明细 */
export type postPondIdentityDto = { schema: PondIdentity };
export type postPondIdentityRes = null;
export type deletePondIdentityDto = { id: INTEGER_PG };
export type deletePondIdentityRes = null;

export const PATH_POND_IDENTITY_GROUP_USER = "/pond/identity/group/user";
/** 资源范围中的所有者才能添加/删除具体的外部访客
 * @important 一般会把这个实体交给各个业务系统，业务系统再通过身份组微服务去判断发起者是否有权限进一步在业务系统中继续操作
*/
export type postPondIdentityGroupUserDto = { schema: PondIdentityGroupUser };
export type postPondIdentityGroupUserRes = null;
export type deletePondIdentityGroupUserDto = { id: INTEGER_PG };
export type deletePondIdentityGroupUserRes = null;
