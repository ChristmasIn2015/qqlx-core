import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export enum ENUM_CORP {
    /** 未认证 */
    NONE,
    /** 个体户 */
    STUDIO,
    /** 公司 */
    COMPANY,
}

const MAP_ENUM_CORP = new Map<ENUM_CORP, EnumMapOption>();
MAP_ENUM_CORP.set(ENUM_CORP.NONE, { value: ENUM_CORP.NONE, text: "未认证" });
MAP_ENUM_CORP.set(ENUM_CORP.STUDIO, { value: ENUM_CORP.STUDIO, text: "个体户" });
MAP_ENUM_CORP.set(ENUM_CORP.COMPANY, { value: ENUM_CORP.COMPANY, text: "公司" });
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
