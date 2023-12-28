import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 法人商品模板的分组，分组之间的商品模板不允许重复 */
export type SkuTplGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
} & PgBaseSchema;

/** 通用商品（仅用于继承） */
export type CommonSku = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    norm: VARCHAR255_PG;
    remark: VARCHAR255_PG;
    price: INTEGER_PG;
    unit: INTEGER_PG;
} & PgBaseSchema;