import type { MongodbBase } from "qqlx-cdk";
import { ENUM_ORDER } from "./order.schema";
/** 客户分析（销售订单） */
export type ContactAnalysis = {
    corpId: string;
    contactId: string;
    type: ENUM_ORDER;
    /** 订单数量 */
    count: number;
    amountOrder: number;
    amountBookOfOrder: number;
    amountBookOfOrderRest: number;
    amountBookOfOrderVAT: number;
    amountBookOfOrderVATRest: number;
} & MongodbBase;
