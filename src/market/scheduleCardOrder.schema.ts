import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

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

const MAP_ENUM_PAY_STATUS_WECHAT = new Map<ENUM_PAY_STATUS_WECHAT, EnumMapOption>();
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.NOTPAY, { value: ENUM_PAY_STATUS_WECHAT.NOTPAY, text: "未支付", text_en: "NOTPAY" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.SUCCESS, { value: ENUM_PAY_STATUS_WECHAT.SUCCESS, text: "支付成功", text_en: "SUCCESS" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.CLOSED, { value: ENUM_PAY_STATUS_WECHAT.CLOSED, text: "支付已关闭", text_en: "CLOSED" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.USERPAYING, { value: ENUM_PAY_STATUS_WECHAT.USERPAYING, text: "尚未支付", text_en: "USERPAYING" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.PAYERROR, { value: ENUM_PAY_STATUS_WECHAT.PAYERROR, text: "支付异常", text_en: "PAYERROR" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.REVOKED, { value: ENUM_PAY_STATUS_WECHAT.REVOKED, text: "已撤销", text_en: "REVOKED" });
MAP_ENUM_PAY_STATUS_WECHAT.set(ENUM_PAY_STATUS_WECHAT.REFUND, { value: ENUM_PAY_STATUS_WECHAT.REFUND, text: "退款中", text_en: "REFUND" });
export { MAP_ENUM_PAY_STATUS_WECHAT };

export type ScheduleCardOrder = {
    /** @foreign */
    corpId: string;
    /** @foreign */
    cardId: string;

    statusWeChatPay: ENUM_PAY_STATUS_WECHAT;
    amount: number;
} & MongodbBase;
