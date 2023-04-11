import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_CORP {
    /** 未认证 */
    NONE = 0,
    /** 个体户 */
    STUDIO = 1,
    /** 公司 */
    COMPANY = 2
}
declare const MAP_ENUM_CORP: Map<ENUM_CORP, EnumMapOption>;
export { MAP_ENUM_CORP };
/** @primary */
export type Corp = {
    /** @foreign */
    userId: string;
    type: ENUM_CORP;
    name: string;
    address: string;
    contact: string;
    isDisabled: boolean;
} & MongodbBase;
