import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";

import { ENUM_ROLE_CONTENT, ENUM_ROLE_SCOPE } from "./dto"

/** 哪个用户？在哪个任意系统中？有哪些权限？ */
export type UserRole = {
    userId: INTEGER_PG;
    scope: ENUM_ROLE_SCOPE;
    content: ENUM_ROLE_CONTENT;
} & PgBaseSchema;
export const RELATIONS_RIVER_DRAFT_NODE_ROLE = "river_draft_node_role";
