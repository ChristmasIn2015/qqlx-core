import type { User } from "../../schema/user/user";
import type { UserWeChat } from "../../schema/user/userWechat";
import type { RoleCMS } from "../../schema/cms/role";

export const PATH_CMS_ROLE = "/qqlx/cms/role";
export type postRoleWMSSDto = RoleCMS;
export type postRoleWMSSRes = null;

export type RoleWMSSJoined = RoleCMS & { joinWeChat: UserWeChat };
export type getRoleWMSSDto = null;
export type getRoleWMSSRes = RoleWMSSJoined[];

export type deleteRoleWMSSDto = { roleId: string };
export type deleteRoleWMSSRes = null;
