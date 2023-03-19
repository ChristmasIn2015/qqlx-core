import type { MongodbBase } from "../../utils/database";

/** OA后台角色 */
export type RoleOA = {
    /** @foreign */
    corpId: string;
    /** @foreign */
    userId: string;

    role: ENUM_ROLE_OA;
} & MongodbBase;

/** OA后台角色明细 */
export enum ENUM_ROLE_OA {
    /** 管理员 */
    ROOT = 1,

    /** 基础权限 */
    BASE,

    /** 访客权限 */
    VISITOR,
}
