import { MongodbQuery } from "../utils/database";

import { ScheduleCard, ScheduleCardOrder } from "./entity";

export const SCHEDULE_CARD_PATH = "/qqlx/schedule/card";
export type postScheduleCardDto = ScheduleCard;
export type postScheduleCardRes = null;

export type getScheduleCardDto = ScheduleCard;
export type getScheduleCardRes = ScheduleCard[];

export type patchScheduleCardDto = ScheduleCard;
export type patchScheduleCardRes = ScheduleCard;

export const SCHEDULE_CARD_ORDER_PATH = "/qqlx/schedule/card/order";
export const STATUS_WECHAT_PAY_MAP = ["NOTPAY", "SUCCESS", "CLOSED", "USERPAYING", "PAYERROR", "REVOKED", "REFUND"];
/** 微信支付流程
 * @step1 创建本地支付订单
 * @step2 创建微信支付订单（未创建成功）
 * @step3 如果微信支付订单接口正常，则更新本地支付订单为（创建成功）
 */
export type postScheduleCardOrderDto = ScheduleCardOrder;
export type postScheduleCardOrderRes = string;

/** 查询本地支付订单（支付成功）
 * @step1 向微信查询本地所有 未支付、用户支付中 的微信支付订单
 * @step2 更新本地支付订单
 * @step3 返回本地支付订单
 */
export type getScheduleCardOrderDto = { MongodbQuery: MongodbQuery<null> };
export type getScheduleCardOrderRes = MongodbQuery<{ joinCard: ScheduleCard } & ScheduleCardOrder>;

/** 本地支付订单-更新
 * @step1 向微信查询本地所有 未支付、用户支付中 的微信支付订单
 * @step2 更新本地支付订单
 */
export type patchScheduleCardOrderDto = null;
export type patchScheduleCardOrderRes = null;
