import type { MongodbBase } from "../../utils/database";

/** 打卡箱的场景 */
export type Line = {
    /** @foreign */
    corpId: string;

    title: string;
    desc: string;
} & MongodbBase;
