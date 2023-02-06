import { MongodbSort } from "./utils/database";
import { ENUM_PROJECT } from "./schema/pmo/project";
import { ENUM_ROLE_DEVOPS, MAP_ENUM_ROLE_DEVOPS } from "./schema/devops/role";
import { ENUM_ROLE_MARKET, MAP_ENUM_ROLE_MARKET } from "./schema/market/role";
import { ENUM_ROLE_WMSS, MAP_ENUM_ROLE_WMSS } from "./schema/wmss/role";
import { ENUM_CORP } from "./schema/brand/corp";
import { ENUM_PAY_STATUS_WECHAT, MAP_ENUM_PAY_STATUS_WECHAT } from "./schema/market/scheduleCardOrder";
import { ENUM_BOOK_TYPE, ENUM_BOOK_DIRECTION } from "./schema/wmss/book";
import { ENUM_LAYOUT_CABINET, MAP_ENUM_LAYOUT_CABINET, ENUM_POUNDS_FORMULA, MAP_ENUM_POUNDS_FORMULA } from "./schema/wmss/cabinet";
import { ENUM_ORDER, MAP_ENUM_ORDER } from "./schema/wmss/order";
export {
	MongodbSort,
	ENUM_PROJECT,
	ENUM_ROLE_DEVOPS,
	ENUM_ROLE_MARKET,
	ENUM_CORP,
	ENUM_PAY_STATUS_WECHAT,
	ENUM_ROLE_WMSS,
	ENUM_BOOK_TYPE,
	ENUM_BOOK_DIRECTION,
	ENUM_LAYOUT_CABINET,
	ENUM_POUNDS_FORMULA,
	ENUM_ORDER,
};
export {
	MAP_ENUM_ROLE_MARKET,
	MAP_ENUM_ROLE_DEVOPS,
	MAP_ENUM_PAY_STATUS_WECHAT,
	MAP_ENUM_ROLE_WMSS,
	MAP_ENUM_LAYOUT_CABINET,
	MAP_ENUM_POUNDS_FORMULA,
	MAP_ENUM_ORDER,
};

const ROLE_WMSS_ALL = [ENUM_ROLE_WMSS.BASE, ENUM_ROLE_WMSS.ROOT];
const ROLE_WMSS_WM = [
	ENUM_ROLE_WMSS.ROOT,
	ENUM_ROLE_WMSS.PURCHASE,
	ENUM_ROLE_WMSS.SALES,
	ENUM_ROLE_WMSS.WM,
	ENUM_ROLE_WMSS.WM_GETIN,
	ENUM_ROLE_WMSS.WM_PROCESS,
	ENUM_ROLE_WMSS.WM_GETOUT,
	ENUM_ROLE_WMSS.WM_MATERIAL,
];
const ROLE_WMSS_FINANCE = [ENUM_ROLE_WMSS.ROOT, ENUM_ROLE_WMSS.FINANCE, ENUM_ROLE_WMSS.FINANCE_CHUNA, ENUM_ROLE_WMSS.FINANCE_FAPIAO];
export { ROLE_WMSS_ALL, ROLE_WMSS_WM, ROLE_WMSS_FINANCE };

import { trimObject } from "./utils/function";
export { trimObject };

import { PATH_CONTACT } from "./dto/brand/contact";
import { PATH_CORP } from "./dto/brand/corp";
import { PATH_WAREHOUSE } from "./dto/brand/warehouse";
import { PATH_DEVOPS_LOG } from "./dto/devops/log";
import { PATH_SCHEDULE_CARD } from "./dto/market/scheduleCard";
import { PATH_SCHEDULE_CARD_ORDER } from "./dto/market/scheduleCardOrder";
import { PATH_USER } from "./dto/user/user";
import { PATH_BOOK } from "./dto/wmss/book";
import { PATH_CABINET } from "./dto/wmss/cabinet";
import { PATH_CABINET_UNIT } from "./dto/wmss/cabinetUnit";
import { PATH_ORDER } from "./dto/wmss/order";
import { PATH_WMSS_ROLE } from "./dto/wmss/role";
import { PATH_SKU } from "./dto/wmss/sku";
export {
	PATH_USER,
	PATH_CONTACT,
	PATH_CORP,
	PATH_WAREHOUSE,
	PATH_DEVOPS_LOG,
	PATH_SCHEDULE_CARD,
	PATH_SCHEDULE_CARD_ORDER,
	PATH_BOOK,
	PATH_CABINET,
	PATH_CABINET_UNIT,
	PATH_ORDER,
	PATH_WMSS_ROLE,
	PATH_SKU,
};
