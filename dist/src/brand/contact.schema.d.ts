import { EnumMapOption } from "qqlx-cdk";
import type { MongodbBase } from "qqlx-cdk";
export declare enum ENUM_CONTACT {
    NONE = 1000,
    /** 供应商 */
    PURCHASE = 2000,
    /** 客户 */
    SALES = 3000
}
declare const MAP_ENUM_CONTACT: Map<ENUM_CONTACT, EnumMapOption>;
export { MAP_ENUM_CONTACT };
export type Contact = {
    /** @foreign */
    corpId: string;
    type: ENUM_CONTACT;
    name: string;
    address: string;
    remark: string;
    isDisabled: boolean;
} & MongodbBase;
