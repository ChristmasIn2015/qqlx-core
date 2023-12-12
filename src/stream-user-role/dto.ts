import { INTEGER_PG } from "../_/db.pg";
import { DraftNode } from "./schema";

export enum ENUM_ROLE_CONTENT {
    /** 所有权 */
    OWNER,
    /** 读取 */
    READONLY,
    /** 写入 */
    WRITE
}

/** 内部系统枚举 */
export enum ENUM_ROLE_SCOPE {
    RIVER_DRAFT = 1000
}