import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";

/** 素材分组
*/
export type MediaGroup = {
    uid: VARCHAR50_PG;
    name: VARCHAR50_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

export type MediaGroupRelation = {
    oid: INTEGER_PG;
    gid: INTEGER_PG;

    joinMedia?: Media
    joinGroup?: MediaGroup
} & PgBaseSchema;

export enum ENUM_MEDIA {
    FILE_IMAGE_TCLOUD = 1000,
    FILE_VIDEO_TCLOUD
}

/** 素材
 * @name 公司名称
 * @address 地址
 * @contact 联系人
*/
export type Media = {
    uid: VARCHAR50_PG;
    type: ENUM_MEDIA;
    name: VARCHAR50_PG;
    address: VARCHAR255_PG;
    contact: VARCHAR255_PG;
    remark: VARCHAR255_PG;
} & PgBaseSchema;

