import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../todo=stream-user/schema";
import type { _Order } from "../../_/trade";

/** 现实情况中，一次交易将会涉及到各类单据、物流、财务信息等
 * @amount 综合金额，它合计了涉及的所有单据的金额，代表着本次交易所涉及的全部金额
 */
export type PondTrade = PgBaseSchema & _Owner & {
    amount: INTEGER_PG;
};

/** 法人的操作记录
 * @title 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
*/
export type PondTradeClue = PgBaseSchema & _Owner & {
    tradeId: INTEGER_PG;

    title: VARCHAR255_PG;
    desc: VARCHAR_PG;
};