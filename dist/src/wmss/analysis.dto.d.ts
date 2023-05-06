import { Page, PageRes, MongodbSort } from "qqlx-cdk";
import type { Contact } from "../brand/contact.schema";
import type { ENUM_ORDER } from "./order.schema";
import { ContactAnalysis } from "./analysis.schema";
export declare const PATH_ORDER_ANALYSIS = "/qqlx/wmss/order/analysis";
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
export declare const PATH_CONTACT_ANALYSIS = "/qqlx/wmss/contact/analysis";
export type ContactAnalysisJoined = ContactAnalysis & {
    joinContact?: Contact;
};
export type getContactAnalysisDto = {
    page: Page;
    search: ContactAnalysis;
    sortKey?: string;
    sortValue?: MongodbSort;
};
export type getContactAnalysisRes = PageRes<ContactAnalysisJoined>;
export declare const PATH_SKU_ANALYSIS = "/qqlx/wmss/sku/analysis";
export type getSkuAnalysisDto = {
    startTime: number;
    endTime: number;
}[];
export type getSkuAnalysisRes = {
    startTime: number;
    endTime: number;
    calcu: Record<ENUM_ORDER, {
        confirmed: number;
        total: number;
    }>;
}[];
