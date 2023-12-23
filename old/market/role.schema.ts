import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export enum ENUM_MARKET_ROLE {
    /** 内部：营销中心超级管理员 */
    ROOT = 2000,
    /** 内部：营销中心操作员 */
    BASE = 2100,
}

const MAP_ENUM_MARKET_ROLE = new Map<ENUM_MARKET_ROLE, EnumMapOption>();
MAP_ENUM_MARKET_ROLE.set(ENUM_MARKET_ROLE.ROOT, { value: ENUM_MARKET_ROLE.ROOT, text: "超级管理员" });
MAP_ENUM_MARKET_ROLE.set(ENUM_MARKET_ROLE.BASE, { value: ENUM_MARKET_ROLE.BASE, text: "操作员" });
export { MAP_ENUM_MARKET_ROLE };

/** 开发中心：角色 */
export type MarketRole = {
    /** @foreign */
    userId: string;

    role: ENUM_MARKET_ROLE;
} & MongodbBase;
