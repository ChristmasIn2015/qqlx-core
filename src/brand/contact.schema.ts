import { EnumMapOption } from "qqlx-cdk";
import type { MongodbBase } from "qqlx-cdk";

export enum ENUM_CONTACT {
    NONE = 1000,
    /** 供应商 */
    PURCHASE = 2000,
    /** 客户 */
    SALES = 3000,
}

const MAP_ENUM_CONTACT = new Map<ENUM_CONTACT, EnumMapOption>();
MAP_ENUM_CONTACT.set(ENUM_CONTACT.NONE, { value: ENUM_CONTACT.NONE, text: "其他" });
MAP_ENUM_CONTACT.set(ENUM_CONTACT.PURCHASE, { value: ENUM_CONTACT.PURCHASE, text: "供应商" });
MAP_ENUM_CONTACT.set(ENUM_CONTACT.SALES, { value: ENUM_CONTACT.SALES, text: "客户" });
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
