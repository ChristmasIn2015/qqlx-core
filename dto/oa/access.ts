import type { UserInfo } from "../../dto/user/user";
import type { Access } from "../../schema/oa/access";

export const PATH_OA_ACCESS = "/qqlx/oa/access";
export type postAccessDto = Access[];
export type postAccessRes = null;

export type AccessJoined = Access & { joinUserInfo?: UserInfo };
export type getAccessDto = { search: Access };
export type getAccessRes = AccessJoined[];

export type deleteAccessDto = { entityId: string };
export type deleteAccessRes = null;
