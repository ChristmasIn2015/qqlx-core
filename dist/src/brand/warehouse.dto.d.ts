import type { Warehouse } from "./warehouse.schema";
export declare const PATH_BRAND_WAREHOUSE = "/qqlx/brand/warehouse";
export type postWarehouseDto = Warehouse;
export type postWarehouseRes = Warehouse;
export type getWarehouseDto = null;
export type getWarehouseRes = Warehouse[];
export type patchWarehouseDto = Warehouse;
export type patchWarehouseRes = Warehouse;
export type deletehWarehouseDto = {
    entityId: string;
};
export type deleteWarehouseRes = null;
