import type { Area } from "./area.schema";
import type { Warehouse } from "./warehouse.schema";

export const PATH_BRAND_AREA = "/qqlx/brand/area";
export type postAreaDto = Area;
export type postAreaRes = Area;

export type AreaJoined = Area & {
    joinWarehouse: Warehouse;
};
export type getAreaDto = null;
export type getAreaRes = AreaJoined[];

export type patchAreaDto = Area;
export type patchAreaRes = Area;

export type deletehAreaDto = { entityId: string };
export type deleteAreaRes = null;
