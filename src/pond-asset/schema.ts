import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG } from "../../_/db.pg";

/** 经济主体 */
export type CorpAs = {
    uid: string;
    name: string;
    address: string;
    contact: string;
} & PgBaseSchema;

/** 房产 */
export type EstateAs = {
    uid: string;
    name: string;
    address: string;
    contact: string;
} & PgBaseSchema;
