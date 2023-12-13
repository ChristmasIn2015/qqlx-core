import type { UserInfo } from "../stream-user/dto"

import type { UserDroit } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR50_PG } from "../_/db.pg";

export enum ENUM_USER_DROIT {
    /** 所有权 */
    OWNER,
    /** 读取 */
    READONLY,
    /** 写入 */
    WRITE
}

export const DROPLET_STREAM_USER_DROIT = "stream:user:droit";
export const PATH_STREAM_USER_DROIT = "/stream/user/droit";

export type getUserDroitDto = { scope: VARCHAR50_PG; };
export type getUserDroitRes = (UserDroit & { joinUser?: UserInfo })[];
export type postUserDroitDto = { schema: UserDroit };
export type postUserDroitRes = null;
export type deleteUserDroitDto = { id: INTEGER_PG };
export type deleteUserDroitRes = null;