import { EnumMapOption } from "qqlx-cdk";

/** 项目分类 */
export enum ENUM_PROJECT {
    /** 清泉流响 钢材·钢材办公室 */
    KDBGS = 1000,
    /** 清泉流响  */
    OA = 2000,
}

const MAP_ENUM_PROJECT = new Map<ENUM_PROJECT, EnumMapOption>();
MAP_ENUM_PROJECT.set(ENUM_PROJECT.KDBGS, { value: ENUM_PROJECT.KDBGS, text: "钢材办公室" });
MAP_ENUM_PROJECT.set(ENUM_PROJECT.OA, { value: ENUM_PROJECT.OA, text: "办公平台" });
export { MAP_ENUM_PROJECT };
