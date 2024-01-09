import type { StreamUserAccessGroup, StreamUserAccess } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../../_/db.pg";
import type { UserInfo } from "../stream-user/dto";

export type StreamUserAccessGroupJoined = StreamUserAccessGroup & {
    userAccessList: StreamUserAccess[]
}

export const PATH_STREAM_USER_ACCESS_GROUP = "/pond/user/access/group";
/** 每个业务系统必须保证，权限范围中的资源所有权，必须和提交者一致
 * @scope 例如 brand:corp:10001:sale 主体的所有者必须是提交者
 */
export type postStreamAccessGroupDto = { schema: StreamUserAccessGroup };
export type postStreamAccessGroupRes = null;
export type putStreamAccessGroupDto = { entity: StreamUserAccessGroup };
export type putStreamAccessGroupRes = null;
export type deleteStreamAccessGroupDto = { id: INTEGER_PG };
export type deleteStreamAccessGroupRes = null;

/** 根据范围获取群组 */
export type getStreamAccessGroupByScopeDto = { scope: VARCHAR255_PG };
export type getStreamAccessGroupByScopeDtoRes = StreamUserAccess[];

/** 根据用户获取群组 */
export type getStreamAccessGroupByOwnerDto = { uuid32: VARCHAR50_PG };
export type getStreamAccessGroupByOwnerDtoRes = StreamUserAccess[];

export const PATH_STREAM_USER_ACCESS = "/pond/user/access";
/** 资源范围中的所有者才能添加/删除具体的外部访客
 * @important 一般会把这个实体交给各个业务系统，业务系统再通过身份组微服务去判断发起者是否有权限进一步在业务系统中继续操作
 */
export type postStreamAccessGroupUserDto = { schema: StreamUserAccess };
export type postStreamAccessGroupUserRes = null;
export type deleteStreamAccessGroupUserDto = { id: INTEGER_PG };
export type deleteStreamAccessGroupUserRes = null;
