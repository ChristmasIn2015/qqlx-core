import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { Contact } from "../../schema/brand/contact";
import type { ENUM_ORDER, Order } from "../../schema/wmss/order";
import type { Book } from "../../schema/wmss/book";
import type { BookOfOrder } from "../../schema/wmss/bookOfOrder";
import type { BookOfSelf } from "../../schema/wmss/bookOfSelf";
import type { ScheduleCardOrderJoined } from "../../dto/market/scheduleCardOrder";

export const PATH_ANALYSIS = "/qqlx/wmss/analysis";

export type getAnalysisDto = null;
export type getAnalysisRes = {
	// 未处理的SKU计算
	skuNotConfirmed: { type: ENUM_ORDER; count: number }[];
	// 最后的已支付订单
	lastActiveScheduleCardOrder: ScheduleCardOrderJoined;
};
