import { Page, PageRes, MongodbSort } from "qqlx-cdk";

import type { UserInfo } from "../user/user.dto";
import type { Contact } from "../brand/contact.schema";
import type { Order, ENUM_ORDER } from "./order.schema";

export const PATH_ORDER_ANALYSIS = "/qqlx/wmss/order/analysis";
export type OrderAnalysis = {
    type: ENUM_ORDER;
    startTime: number;
    endTime: number;
    analysis?: {
        count: number;
        amount: number;
        amountBookOfOrder: number;
        amountBookOfOrderVAT: number;
    };
};
export type getOrderAnalysisDto = OrderAnalysis;
export type getOrderAnalysisRes = OrderAnalysis;

export const PATH_CONTACT_ANALYSIS = "/qqlx/wmss/contact/analysis";
export type getContactAnalysisDto = {
    type: ENUM_ORDER;
    startTime: number;
    endTime: number;
    sortKey: string;
    sortValue: MongodbSort;

    contactId?: string;
};
export type getContactAnalysisRes = {
    type: ENUM_ORDER;
    contactId: string;
    joinContact?: Contact;

    /** 订单数量 */
    count: number;
    amount: number;
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
}[];

export const PATH_SKU_ANALYSIS = "/qqlx/wmss/sku/analysis";
export type getSkuAnalysisDto = null;
export type getSkuAnalysisRes = {
    /** 当前在库原材料 */
    poundsFinal: number;
};
