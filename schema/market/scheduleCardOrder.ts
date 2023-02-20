import type { MongodbBase } from "../../utils/database";

export type ScheduleCardOrder = {
	/** @foreign */
	corpId: string;
	/** @foreign */
	cardId: string;

	statusWeChatPay: ENUM_PAY_STATUS_WECHAT;
	amount: number;
} & MongodbBase;

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

export const MAP_ENUM_PAY_STATUS_WECHAT = [
	{ key: "NOTPAY", value: ENUM_PAY_STATUS_WECHAT.NOTPAY, text: "未支付" },
	{ key: "SUCCESS", value: ENUM_PAY_STATUS_WECHAT.SUCCESS, text: "支付成功" },
	{ key: "CLOSED", value: ENUM_PAY_STATUS_WECHAT.CLOSED, text: "支付已关闭" },
	{ key: "USERPAYING", value: ENUM_PAY_STATUS_WECHAT.USERPAYING, text: "尚未支付" },
	{ key: "PAYERROR", value: ENUM_PAY_STATUS_WECHAT.PAYERROR, text: "支付异常" },
	{ key: "REVOKED", value: ENUM_PAY_STATUS_WECHAT.REVOKED, text: "已撤销" },
	{ key: "REFUND", value: ENUM_PAY_STATUS_WECHAT.REFUND, text: "退款中" },
];
