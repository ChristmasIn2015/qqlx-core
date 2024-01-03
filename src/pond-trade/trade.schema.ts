import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Order } from "../../_/trade";

/** 现实情况中，一次交易将会涉及到各类单据、物流、财务信息等
 * @amountRevenue 本笔交易产生的收入（销售+加工-运输）
 * @amountCost 本笔交易产生的费用（采购+运输）
 */
export type Trade = PgBaseSchema & _Owner & {
    amountRevenue: INTEGER_PG;
    amountCost: INTEGER_PG;

    amountRevenueRest: INTEGER_PG;
    amountCostRest: INTEGER_PG;
};

/** 法人的操作记录
 * @title 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
*/
export type TradeClue = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;

    title: VARCHAR255_PG;
    desc: VARCHAR_PG;
};