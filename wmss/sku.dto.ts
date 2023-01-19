import { Warehouse } from "../brand/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";

import { SkuScope, SkuCounter, Sku } from "./sku.entity";
import { Order } from "./order.entity";

export const SKU_SCOPE_PATH = "/qqlx/wmss/sku/scope";
export type postSkuScopeDto = SkuScope;
export type postSkuScopeRes = null;

export type getSkuScopeDto = null;
export type getSkuScopeRes = SkuScope[];

export type patchSkuScopeDto = SkuScope;
export type patchSkuScopeRes = SkuScope;

export const SKU_COUNTER_PATH = "/qqlx/wmss/sku/counter";
export type postSkuCounterDto = SkuCounter[];
export type postSkuCounterRes = null;

export type getSkuCounterDto = { MongodbQuery: MongodbQuery<null>; SkuCounter: SkuCounter };
export type getSkuCounterRes = MongodbQuery<SkuCounter>;

export type patchSkuCounterDto = SkuCounter;
export type patchSkuCounterRes = SkuCounter;

export type deleteSkuCounterDto = { skuCounterId: string };
export type deleteSkuCounterRes = null;

export const SKU_PATH = "/qqlx/wmss/sku";
export type SkuJoined = {
	joinWarehouse?: Warehouse;
	joinOrder?: Order;
} & Sku;
export type getSkuDto = {
	sortByPounds?: MongodbSort;
	sortByCount?: MongodbSort;

	entity?: Sku;
	page?: MongodbQuery<null>;
};
export type getSkuRes = MongodbQuery<SkuJoined>;

export type patchSkuDto = Sku;
export type patchSkuRes = null;
