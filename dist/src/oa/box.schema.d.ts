import type { MongodbBase } from "qqlx-cdk";
/** 打卡箱 */
export type Box = {
    /** @foreign */
    corpId: string;
    title: string;
    desc: string;
    images: string;
    isDisabled: boolean;
} & MongodbBase;
