import type { Box } from "../../schema/oa/box";
import type { BoxLineUnit } from "../../schema/oa/boxLineUnit";

export const PATH_OA_BOXLINE_UNIT = "/qqlx/oa/box/line/unit";
export type postBoxLineUnitDto = BoxLineUnit;
export type postBoxLineUnitRes = null;

export type deleteBoxLineUnitDto = { entityId: string };
export type deleteBoxLineUnitRes = null;

export type BoxLineUnitJoined = BoxLineUnit & { joinBox: Box };
