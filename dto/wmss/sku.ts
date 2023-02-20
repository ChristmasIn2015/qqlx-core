import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import type { User } from "../../schema/user/user";
import type { Contact } from "../../schema/brand/contact";
import type { Warehouse } from "../../schema/brand/warehouse";
import type { Order, ENUM_ORDER } from "../../schema/wmss/order";
import type { Sku } from "../../schema/wmss/sku";
import type { Fee } from "../../schema/wmss/fee";

export const PATH_SKU = "/qqlx/wmss/sku";

export type SkuInView = Sku & {
	joinWarehouse?: Warehouse;
	joinSku: Sku;
	joinOrder: Order;
	joinOrderContact: Contact;
};

export type getSkuDto = {
	sortKey?: string;
	sortValue?: MongodbSort;
	groupKey?: string;

	page: MongodbPage;
	search: Sku;
	types: ENUM_ORDER[];
};
export type getSkuRes = MongodbPageRes<SkuInView>;

/** 仅用于入库、发货 */
export type patchSkuDto = { entity: Sku };
export type patchSkuRes = null;
