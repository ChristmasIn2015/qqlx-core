import type { UserWeChat } from "../../schema/user/userWechat";
import type { RoleWMSS } from "../../schema/wmss/role";

export const PATH_WMSS_ROLE = "/qqlx/wmss/role";
export type postRoleWMSSDto = RoleWMSS;
export type postRoleWMSSRes = null;

export type RoleWMSSJoined = RoleWMSS & { joinWeChat: UserWeChat };
export type getRoleWMSSDto = null;
export type getRoleWMSSRes = RoleWMSSJoined[];

export type deleteRoleWMSSDto = { roleId: string };
export type deleteRoleWMSSRes = null;
