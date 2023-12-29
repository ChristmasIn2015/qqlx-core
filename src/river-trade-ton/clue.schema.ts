import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../stream-user/schema";
import type { _Sku, _SkuInventory, _Order } from "../../_/trade";
import { UserInfo } from "../stream-user/dto";
import { Contact } from "../pond-contact/schema";

/** 法人的操作记录 */
export type TonTradeClue = PgBaseSchema & _Owner & {
    /** 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
     * @demo IP;
     */
    title: VARCHAR255_PG;
    text: VARCHAR_PG;
};