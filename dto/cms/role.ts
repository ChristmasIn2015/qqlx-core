import type { User } from "../../schema/user/user";
import type { UserWeChat } from "../../schema/user/userWechat";
import type { RoleCMS } from "../../schema/cms/role";

export const PATH_CMS_ROLE = "/qqlx/cms/role";
export type postRoleCMSDto = RoleCMS;
export type postRoleCMSRes = null;

export type RoleCMSJoined = RoleCMS & { joinWeChat: UserWeChat };
export type getRoleCMSDto = null;
export type getRoleCMSRes = RoleCMSJoined[];

export type deleteRoleCMSDto = { roleId: string };
export type deleteRoleCMSRes = null;
