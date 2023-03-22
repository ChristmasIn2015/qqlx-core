import type { AccessJoined } from "../../dto/oa/access";
import type { Access } from "../../schema/oa/access";
import type { LineAccess } from "../../schema/oa/lineAccess";

export const PATH_OA_LINEACCESS = "/qqlx/oa/line/access";
export type postLineAccessDto = Access[];
export type postLineAccessRes = null;

export type deleteLineAccessDto = { entityId: string };
export type deleteLineAccessRes = null;

export type LineAccessJoined = LineAccess & { joinAccess: AccessJoined };
