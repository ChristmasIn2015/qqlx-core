import { Cabinet } from "../../schema/wmss/cabinet";

export const PATH_CABINET = "/qqlx/wmss/cabinet";
export type postCabinetDto = Cabinet;
export type postCabinetRes = null;

export type getCabinetDto = null;
export type getCabinetRes = Cabinet[];

export type patchCabinetDto = Cabinet;
export type patchCabinetRes = Cabinet;

export type deleteCabinetDto = { cabinetId: string };
export type deleteCabinetRes = null;
