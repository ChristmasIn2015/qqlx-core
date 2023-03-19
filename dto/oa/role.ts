import type { User } from "../../schema/user/user";
import type { UserWeChat } from "../../schema/user/userWechat";
import type { RoleOA } from "../../schema/oa/role";

export const PATH_OA_ROLE = "/qqlx/oa/role";
export type postRoleOADto = RoleOA;
export type postRoleOARes = null;

export type RoleOAJoined = RoleOA & { joinWeChat: UserWeChat };
export type getRoleOADto = null;
export type getRoleOARes = RoleOAJoined[];

export type deleteRoleOADto = { roleId: string };
export type deleteRoleOARes = null;
