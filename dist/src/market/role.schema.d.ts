import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare const enum ENUM_MARKET_ROLE {
    /** 内部：营销中心超级管理员 */
    ROOT = 2000,
    /** 内部：营销中心操作员 */
    BASE = 2100
}
declare const MAP_ENUM_MARKET_ROLE: Map<ENUM_MARKET_ROLE, EnumMapOption>;
export { MAP_ENUM_MARKET_ROLE };
/** 开发中心：角色 */
export type MarketRole = {
    /** @foreign */
    userId: string;
    role: ENUM_MARKET_ROLE;
} & MongodbBase;
