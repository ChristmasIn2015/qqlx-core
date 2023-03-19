import type { MongodbBase } from "../../utils/database";

/** 打卡箱的规则 */
export type BoxLine = {
    /** @foreign */
    corpId: string;

    title: string;
    desc: string;
} & MongodbBase;
