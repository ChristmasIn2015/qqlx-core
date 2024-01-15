import type { StreamUserAccessGroup, StreamUserAccess } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR255_PG, VARCHAR50_PG } from "../../_/db.pg";
import type { UserInfo } from "../stream-user/dto";
import { ConditionList } from "../../_/search.match";

export const PATH_STREAM_USER_ACCESS_GROUP = "/stream/user/access/group";
/** @uuid32 查看 “我” 的权限组 */
export type getStreamAccessGroupDto = null;
export type getStreamAccessGroupDtoRes = StreamUserAccessGroup[];
export type postStreamAccessGroupDto = { schema: StreamUserAccessGroup };
export type postStreamAccessGroupRes = null;
export type putStreamAccessGroupDto = { entity: StreamUserAccessGroup };
export type putStreamAccessGroupRes = null;
export type deleteStreamAccessGroupDto = { id: INTEGER_PG };
export type deleteStreamAccessGroupRes = null;

export const PATH_STREAM_USER_ACCESS = "/stream/user/access";
export const DROPLET_STREAM_USER_ACCESS = "stream:user:access";
/** 明细权限查询
 * @gid 查看权限组中的所有明细权限
 * @uuid32 查看 “我” 被授予的的权限
*/
export type getStreamAccessDto = { conditions: ConditionList<StreamUserAccess> };
export type getStreamAccessRes = StreamUserAccess[];
export type postStreamAccessDto = { schema: StreamUserAccess };
export type postStreamAccessRes = null;
export type deleteStreamAccessDto = { id: INTEGER_PG };
export type deleteStreamAccessRes = null;
