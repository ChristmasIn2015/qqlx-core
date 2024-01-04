import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Group } from "../../_/utils"

/** 媒体素材的分组 */
export type PondMediaGroup = PgBaseSchema & _Owner & _Group

export enum ENUM_POND_MEDIA {
    FILE_IMAGE_TCLOUD = 1000,
    FILE_VIDEO_TCLOUD
}

/** 媒体素材
 * @alt 即 alternative 可供替代的;非传统的;另类的
*/
export type PondMedia = PgBaseSchema & _Owner & {
    gid: INTEGER_PG;

    type: ENUM_POND_MEDIA;
    host: VARCHAR255_PG;
    path: VARCHAR255_PG;
    alt: VARCHAR255_PG;

    rectWidth: SMALLINT_PG;
    rectHeight: SMALLINT_PG;
    rectRate: SMALLINT_PG;
}

