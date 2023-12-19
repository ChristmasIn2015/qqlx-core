import type { UserInfo } from "../stream-user/dto";

import type { StreamUserDroit } from "./schema";
import type { INTEGER_PG, PgBaseSchema, VARCHAR50_PG } from "../_/db.pg";

export enum ENUM_STREAM_USER_DROIT {
    /** 所有权 */
    OWNER = 1001,
    /** 读取 */
    READONLY,
    /** 写入 */
    WRITE,
}

export const DROPLET_STREAM_USER_DROIT = "stream:user:droit";
export const PATH_STREAM_USER_DROIT = "/stream/user/droit";

export type getStreamUserDroitDto = { scope: VARCHAR50_PG };
export type getStreamUserDroitRes = StreamUserDroit[];
export type postStreamUserDroitDto = { schema: StreamUserDroit };
export type postStreamUserDroitRes = null;
export type deleteStreamUserDroitDto = { id: INTEGER_PG };
export type deleteStreamUserDroitRes = null;
