import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_BRAND_ROLE {
    /** 公司创建者 */
    ROOT = 3000,
    /** 实习生 */
    TRAINEE = 3001,
    /** 采购专员 */
    PURCHASE = 3100,
    /** 销售专员 */
    SALES = 3200,
    /** 仓库专员 */
    WM = 3300,
    /** 财务专员 */
    FINANCE = 3400,
    /** 现场招待 */
    ENTERTAIN = 3500,
    /** 访客 */
    VISITOR = 3600
}
declare const MAP_ENUM_BRAND_ROLE: Map<ENUM_BRAND_ROLE, EnumMapOption>;
export { MAP_ENUM_BRAND_ROLE };
/** 市场主体：角色 */
export type BrandRole = {
    /** @foreign */
    userId: string;
    /** @foreign */
    corpId: string;
    role: ENUM_BRAND_ROLE;
} & MongodbBase;
