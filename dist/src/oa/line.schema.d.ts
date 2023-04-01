import type { MongodbBase } from "qqlx-cdk";
/** 打卡的场景 */
export type Line = {
    /** @foreign */
    corpId: string;
    title: string;
    desc: string;
} & MongodbBase;
/** 场景中的白名单 */
export type LineAccess = {
    /** @foreign */
    corpId: string;
    lineId: string;
    accessId: string;
} & MongodbBase;
/** 场景中的打卡箱 */
export type LineBox = {
    /** @foreign */
    corpId: string;
    lineId: string;
    boxId: string;
    /** 打卡箱的顺序，如：首先要进行考勤打卡，再进行领取打卡 */
    orderNo: number;
    /** 打卡的次数限制，如：最多1次 */
    orderLimit: number;
    /** 打卡次数限制的清零时间，数值只能为：0～23 */
    orderLimitTime: number;
} & MongodbBase;
