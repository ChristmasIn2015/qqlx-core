import type { UserInfo } from "../user/user.dto";
import type { Access } from "./access.schema";

export const PATH_OA_ACCESS = "/qqlx/oa/access";
export type postAccessDto = Access[];
export type postAccessRes = null;

export type AccessJoined = Access & { joinUserInfo?: UserInfo };
export type getAccessDto = { search: Access };
export type getAccessRes = AccessJoined[];

export type deleteAccessDto = { entityId: string };
export type deleteAccessRes = null;
