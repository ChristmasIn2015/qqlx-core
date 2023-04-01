import type { UserInfo } from "../user/user.dto";
import type { DevOpsRole } from "./role.schema";

export const PATH_DEVOPS_ROLE = "/qqlx/devops/role";
export type postDevOpsRoleDto = DevOpsRole;
export type postDevOpsRoleRes = null;

export type DevOpsRoleJoined = DevOpsRole & { joinUserInfo: UserInfo };
export type getDevOpsRoleDto = null;
export type getDevOpsRoleRes = DevOpsRoleJoined[];

export type deleteDevOpsRoleDto = { entityId: string };
export type deleteDevOpsRoleRes = null;
