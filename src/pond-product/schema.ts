import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 产品分组
*/
export type SpuGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

export type SpuGroupRelation = {
    oid: INTEGER_PG;
    gid: INTEGER_PG;

    joinSpu?: Spu
    joinGroup?: SpuGroup
} & PgBaseSchema;

/** 产品
*/
export type Spu = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    remark: VARCHAR255_PG;

    md5: VARCHAR50_PG;
} & PgBaseSchema;

