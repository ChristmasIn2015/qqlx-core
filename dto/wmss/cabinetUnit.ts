import { MongodbPage, MongodbPageRes, MongodbSort } from "../../utils/database";

import { Cabinet } from "../../schema/wmss/cabinet";
import { CabinetUnit } from "../../schema/wmss/cabinetUnit";

export const PATH_CABINET_UNIT = "/qqlx/wmss/cabinet/unit";
export type postCabinetUnitDto = { excels: CabinetUnit[] };
export type postCabinetUnitRes = null;

export type getCabinetUnitDto = {
	sortByPounds?: MongodbSort;
	sortByCount?: MongodbSort;

	page: MongodbPage;
	search: CabinetUnit;
};
export type getCabinetUnitRes = MongodbPageRes<CabinetUnit>;

export type patchCabinetUnitDto = CabinetUnit;
export type patchCabinetUnitRes = CabinetUnit;

export type deleteCabinetUnitDto = { cabinetUnitId: string };
export type deleteCabinetUnitRes = null;
