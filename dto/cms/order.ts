import type { User } from "../../schema/user/user";
import type { UserWeChat } from "../../schema/user/userWechat";
import type { Order } from "../../schema/cms/order";
import type { Spu } from "../../schema/cms/spu";
import type { Sku } from "../../schema/cms/sku";
import { MongodbPage, MongodbPageRes } from "../../utils/database";

export const PATH_CMS_ORDER = "/qqlx/cms/order";
export type postOrderDto = { schema: Order; spus: Spu[] };
export type postOrderRes = null;

export type OrderJoined = Order & { joinContact: User; joinWeChat: UserWeChat; joinSku: Sku[] };
export type getOrderDto = {
	page: MongodbPage;
	search: Order;

	/** 用户昵称或者手机号 */
	keyword: string;
};
export type getOrderRes = MongodbPageRes<OrderJoined>;

export type patchOrderDto = { entity: OrderJoined };
export type patchOrderRes = null;

export type deleteOrderDto = { orderId: string };
export type deleteOrderRes = null;
