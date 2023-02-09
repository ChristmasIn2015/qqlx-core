import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import { User } from "../../schema/user/user";
import { Contact } from "../../schema/brand/contact";
import { Warehouse } from "../../schema/brand/warehouse";
import { Order } from "../../schema/wmss/order";
import { Sku } from "../../schema/wmss/sku";
import { Fee } from "../../schema/wmss/fee";

export const PATH_SKU = "/qqlx/wmss/sku";

export type SkuInView = Sku & {
	joinWarehouse?: Warehouse;
	joinSku: Sku;
	joinOrder: Order;
	joinOrderContact: Contact;
};

export type getSkuDto = {
	sortByPoundsFinal?: MongodbSort;
	sortByCountFinal?: MongodbSort;

	page: MongodbPage;
	search: Sku;
};
export type getSkuRes = MongodbPageRes<SkuInView>;

/** 仅用于入库、发货 */
export type patchSkuDto = { entity: Sku };
export type patchSkuRes = null;
