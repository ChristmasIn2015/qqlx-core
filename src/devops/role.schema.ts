import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export const enum ENUM_DEVOPS_ROLE {
    /** 内部：开发中心超级管理员 */
    ROOT = 1000,
    /** 内部：开发中心操作员 */
    BASE = 1100,
}

const MAP_ENUM_DEVOPS_ROLE = new Map<ENUM_DEVOPS_ROLE, EnumMapOption>();
MAP_ENUM_DEVOPS_ROLE.set(ENUM_DEVOPS_ROLE.ROOT, { value: ENUM_DEVOPS_ROLE.ROOT, text: "超级管理员" });
MAP_ENUM_DEVOPS_ROLE.set(ENUM_DEVOPS_ROLE.BASE, { value: ENUM_DEVOPS_ROLE.BASE, text: "操作员" });
export { MAP_ENUM_DEVOPS_ROLE };

/** 开发中心：角色 */
export type DevOpsRole = {
    /** @foreign */
    userId: string;

    role: ENUM_DEVOPS_ROLE;
} & MongodbBase;
