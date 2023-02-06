import { Warehouse } from "../../schema/brand/warehouse";

export const PATH_WAREHOUSE = "/qqlx/corp/warehouse";
export type postWarehouseDto = Warehouse;
export type postWarehouseRes = Warehouse;

export type getWarehouseDto = null;
export type getWarehouseRes = Warehouse[];

export type patchWarehouseDto = Warehouse;
export type patchWarehouseRes = Warehouse;

export type deletehWarehouseDto = { warehouseId: string };
export type deleteWarehouseRes = null;
