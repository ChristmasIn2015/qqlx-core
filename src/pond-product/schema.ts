import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 商品分组
 */
export type SkuTemplateGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    desc: VARCHAR255_PG;
} & PgBaseSchema;

export type SkuTemplateRelation = {
    uid: VARCHAR50_PG;
    gid: INTEGER_PG;
    skuId: INTEGER_PG;

    joinSkuTemplate?: SkuTemplate;
} & PgBaseSchema;

/** 产品
 */
export type SkuTemplate = {
    uid: VARCHAR50_PG;

    name: VARCHAR50_PG;
    norm: VARCHAR255_PG;

    count: INTEGER_PG;

    /** 唯一识别库存，根据名称、规格、资产、其他标签组成 */
    tonId: VARCHAR50_PG;

    /** 吨位：1吨 = 1000kg = 1,000,000g */
    ton: INTEGER_PG;

    price: INTEGER_PG;
} & PgBaseSchema;
