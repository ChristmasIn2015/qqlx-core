import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 法人订单的分组 */
export type OrderGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
} & PgBaseSchema;

/** 通用订单（仅用于继承） */
export type CommonOrder = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    norm: VARCHAR255_PG;
    remark: VARCHAR255_PG;
    price: INTEGER_PG;
    unit: INTEGER_PG;
} & PgBaseSchema;