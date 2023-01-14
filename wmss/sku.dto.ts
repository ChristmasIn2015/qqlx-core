import { ObjectId } from "mongodb";
import { Warehouse } from "../brand/entity";
import { MongodbQuery, MongodbSort } from "../utils/database";

import { SkuScope, Sku } from "./sku.entity";
import { Order } from "./order.entity";

export const SKU_SCOPE_PATH = "/qqlx/wmss/sku/scope";
export type postSkuScopeDto = SkuScope;
export type postSkuScopeRes = null;

export type getSkuScopeDto = null;
export type getSkuScopeRes = SkuScope[];

export type patchSkuScopeDto = SkuScope;
export type patchSkuScopeRes = SkuScope;

export const SKU_PATH = "/qqlx/wmss/sku";
export type SkuJoined = {
	joinSkuScope?: SkuScope;
	joinWarehouse?: Warehouse;
	joinFromOrder?: Order;
} & Sku;
export type getSkuDto = {
	sortByPounds?: MongodbSort;
	sortByCount?: MongodbSort;

	entityIds?: ObjectId[];
	entity?: Sku;
	page?: MongodbQuery<null>;
};
export type getSkuRes = MongodbQuery<SkuJoined>;

export type patchSkuDto = Sku;
export type patchSkuRes = null;
