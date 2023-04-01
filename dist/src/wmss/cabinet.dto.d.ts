import { MongodbSort, Page, PageRes } from "qqlx-cdk";
import type { Cabinet, CabinetUnit } from "./cabinet.schema";
export declare const PATH_CABINET = "/qqlx/wmss/cabinet";
export type postCabinetDto = Cabinet;
export type postCabinetRes = null;
export type getCabinetDto = null;
export type getCabinetRes = Cabinet[];
export type patchCabinetDto = Cabinet;
export type patchCabinetRes = Cabinet;
export type deleteCabinetDto = {
    cabinetId: string;
};
export type deleteCabinetRes = null;
export declare const PATH_CABINET_UNIT = "/qqlx/wmss/cabinet/unit";
export type postCabinetUnitDto = {
    cabinet: Cabinet;
    excels: CabinetUnit[];
};
export type postCabinetUnitRes = null;
export type CabinetUnitJoined = CabinetUnit & {
    joinCabinet: Cabinet;
};
export type getCabinetUnitDto = {
    sortKey?: string;
    sortValue?: MongodbSort;
    page: Page;
    search: CabinetUnit;
};
export type getCabinetUnitRes = PageRes<CabinetUnitJoined>;
export type patchCabinetUnitDto = {
    excels: CabinetUnit[];
};
export type patchCabinetUnitRes = null;
export type deleteCabinetUnitDto = {
    cabinetUnitId: string;
};
export type deleteCabinetUnitRes = null;
