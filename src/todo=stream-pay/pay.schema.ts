import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG, SMALLINT_PG, VARCHAR255_PG } from "../../_/db.pg";
import type { _Owner } from "../todo=stream-user/schema";

export enum ENUM_PAY_STATUS_WECHAT {
    /** 未支付 */
    NOTPAY,
    /** 支付成功 */
    SUCCESS,
    /** 已关闭 */
    CLOSED,
    /** 用户支付中（仅付款码支付会返回） */
    USERPAYING,
    /** 支付失败（仅付款码支付会返回） */
    PAYERROR,
    /** 已撤销（仅付款码支付会返回） */
    REVOKED,
    /** 转入退款 */
    REFUND,
}