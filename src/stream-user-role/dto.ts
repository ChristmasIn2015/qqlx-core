import { UserRole } from "./schema";

export enum ENUM_ROLE_SCOPE {
    /** 蓝图系统 */
    RIVER_DRAFT = 1000
}

export enum ENUM_ROLE_CONTENT {
    /** 所有权 */
    OWNER,
    /** 读取 */
    READONLY,
    /** 写入 */
    WRITE
}

export const DROPLET_STREAM_USER_ROLE = "stream:user:role";
export const PATH_STREAM_USER_ROLE = "/stream/user/role";