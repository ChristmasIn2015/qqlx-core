import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { Contact } from "../../schema/brand/contact";
import type { ENUM_ORDER, Order } from "../../schema/wmss/order";
import type { Book } from "../../schema/wmss/book";
import type { BookOfOrder } from "../../schema/wmss/bookOfOrder";
import type { BookOfSelf } from "../../schema/wmss/bookOfSelf";
import type { ScheduleCardOrderJoined } from "../../dto/market/scheduleCardOrder";

export const PATH_ANALYSIS = "/qqlx/wmss/analysis";

export type getAnalysisDto = {
	startTime: number;
	endTime: number;
};
export type getAnalysisRes = {
	// 未处理的SKU计算
	skuNotConfirmed: { type: ENUM_ORDER; count: number }[];
	coutIndividualSkuNotConfirmed: number;
	// 最后的已支付订单
	lastActiveScheduleCardOrder: ScheduleCardOrderJoined;
};

export type getOrderAnalysisDto = {
	startTime: number;
	endTime: number;
};
export type getOrderAnalysisRes = {
	// 销售订单
	countSaleOrder: number;
	amountSaleOrder: number;
	// 仓库订单
	countGetInOrder: number;
	countGetOutOrder: number;
	countMaterialOrder: number;
	countProcessOrder: number;
	// 收到货款
	amountBook_1122_DAI: number;
	// 开出发票
	amountInvoice_1122_JIE: number;
};
