import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_DEVOPS_ROLE {
    /** 内部：开发中心超级管理员 */
    ROOT = 1000,
    /** 内部：开发中心操作员 */
    BASE = 1100
}
declare const MAP_ENUM_DEVOPS_ROLE: Map<ENUM_DEVOPS_ROLE, EnumMapOption>;
export { MAP_ENUM_DEVOPS_ROLE };
/** 开发中心：角色 */
export type DevOpsRole = {
    /** @foreign */
    userId: string;
    role: ENUM_DEVOPS_ROLE;
} & MongodbBase;
