import type { MongodbBase } from "../../utils/database";

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
