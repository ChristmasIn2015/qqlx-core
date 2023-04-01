import { Page, PageRes } from "qqlx-cdk";
import type { ScheduleCard } from "./scheduleCard.schema";
import type { ScheduleCardOrder } from "./scheduleCardOrder.schema";
export declare const PATH_MARKET_CARD_ORDER = "/qqlx/market/card/order";
/** 微信支付流程
 * @step1 创建本地支付订单
 * @step2 创建微信支付订单（未创建成功）
 * @step3 如果微信支付订单接口正常，则更新本地支付订单为（创建成功）
 */
export type postScheduleCardOrderDto = {
    schema: ScheduleCardOrder;
    corpId: string;
};
export type postScheduleCardOrderRes = string;
/** 查询本地支付订单（支付成功）
 * @step1 向微信查询本地所有 未支付、用户支付中 的微信支付订单
 * @step2 更新本地支付订单
 * @step3 返回本地支付订单
 */
export type getScheduleCardOrderDto = {
    page: Page;
    corpId: string;
};
export type ScheduleCardOrderJoined = ScheduleCardOrder & {
    joinCard: ScheduleCard;
};
export type getScheduleCardOrderRes = PageRes<ScheduleCardOrderJoined>;
/** 本地支付订单-更新
 * @step1 向微信查询本地所有 未支付、用户支付中 的微信支付订单
 * @step2 更新本地支付订单
 */
export type patchScheduleCardOrderDto = {
    corpId: string;
};
export type patchScheduleCardOrderRes = null;
export declare const PATH_MARKET_SCO_ANALYSIS = "/qqlx/market/wmss/analysis";
export type getScoAnalysisDto = null;
export type getScoAnalysisRes = {
    lastActiveSCO: ScheduleCardOrderJoined;
};
