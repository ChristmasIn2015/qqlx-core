import type { ENUM_POND_LOG } from "./dto";
import type { PgBaseSchema, BIGINT_PG, VARCHAR_PG, VARCHAR255_PG, SMALLINT_PG } from "../_/db.pg";

export type PondLog = {
    type: ENUM_POND_LOG;

    /** 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
     * @demo IP;追踪链路;REST路径
     */
    title: VARCHAR255_PG;
    text: VARCHAR_PG;
    duration: SMALLINT_PG;
} & PgBaseSchema;
export const RELATIONS_POND_LOG = "pond_log";
