import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 联系人分组
*/
export type ContactGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

export type ContactGroupRelation = {
    oid: INTEGER_PG;
    gid: INTEGER_PG;

    joinContact?: Contact
    joinGroup?: ContactGroup
} & PgBaseSchema;

/** 联系人
 * @name 公司名称
 * @address 地址
 * @contact 联系人
*/
export type Contact = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

