import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_PAY_STATUS_WECHAT {
    /** 未支付 */
    NOTPAY = 0,
    /** 支付成功 */
    SUCCESS = 1,
    /** 已关闭 */
    CLOSED = 2,
    /** 用户支付中（仅付款码支付会返回） */
    USERPAYING = 3,
    /** 支付失败（仅付款码支付会返回） */
    PAYERROR = 4,
    /** 已撤销（仅付款码支付会返回） */
    REVOKED = 5,
    /** 转入退款 */
    REFUND = 6
}
declare const MAP_ENUM_PAY_STATUS_WECHAT: Map<ENUM_PAY_STATUS_WECHAT, EnumMapOption>;
export { MAP_ENUM_PAY_STATUS_WECHAT };
export type ScheduleCardOrder = {
    /** @foreign */
    corpId: string;
    /** @foreign */
    cardId: string;
    statusWeChatPay: ENUM_PAY_STATUS_WECHAT;
    amount: number;
} & MongodbBase;
