// *************************** ENUM ***************************
// *************************** ENUM ***************************
// *************************** ENUM ***************************
// *************************** ENUM ***************************

import { MongodbSort } from "./utils/database";
import { ENUM_PROJECT } from "./schema/pmo/project";
import { ENUM_ROLE_DEVOPS, MAP_ENUM_ROLE_DEVOPS } from "./schema/devops/role";
import { ENUM_ROLE_MARKET, MAP_ENUM_ROLE_MARKET } from "./schema/market/role";
import { ENUM_ROLE_WMSS, MAP_ENUM_ROLE_WMSS } from "./schema/wmss/role";
import { ENUM_ROLE_CMS } from "./schema/cms/role";
import { ENUM_CORP } from "./schema/brand/corp";
import { ENUM_PAY_STATUS_WECHAT, MAP_ENUM_PAY_STATUS_WECHAT } from "./schema/market/scheduleCardOrder";
import { ENUM_BOOK_TYPE, ENUM_BOOK_DIRECTION } from "./schema/wmss/book";
import { ENUM_LAYOUT_CABINET, MAP_ENUM_LAYOUT_CABINET, ENUM_POUNDS_FORMULA, MAP_ENUM_POUNDS_FORMULA } from "./schema/wmss/cabinet";
import { ENUM_ORDER, MAP_ENUM_ORDER } from "./schema/wmss/order";
import { ENUM_CMS_ORDER } from "./schema/cms/order";

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
const ROLE_WMSS_ALL = [ENUM_ROLE_WMSS.BASE, ENUM_ROLE_WMSS.ROOT, ...ROLE_WMSS_WM, ...ROLE_WMSS_FINANCE];

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
	ENUM_ROLE_CMS,
	ENUM_CMS_ORDER,
	//
	MAP_ENUM_ROLE_MARKET,
	MAP_ENUM_ROLE_DEVOPS,
	MAP_ENUM_PAY_STATUS_WECHAT,
	MAP_ENUM_ROLE_WMSS,
	MAP_ENUM_LAYOUT_CABINET,
	MAP_ENUM_POUNDS_FORMULA,
	MAP_ENUM_ORDER,
	//
	ROLE_WMSS_ALL,
	ROLE_WMSS_WM,
	ROLE_WMSS_FINANCE,
};

// *************************** Path ***************************
// *************************** Path ***************************
// *************************** Path ***************************
// *************************** Path ***************************
import { PATH_USER } from "./dto/user/user";

import { PATH_CORP } from "./dto/brand/corp";
import { PATH_CONTACT } from "./dto/brand/contact";
import { PATH_WAREHOUSE } from "./dto/brand/warehouse";
import { PATH_CONFIG_CORP } from "./dto/brand/configCorp";
import { PATH_ANNOUNCE } from "./dto/brand/announce";

import { PATH_DEVOPS_LOG } from "./dto/devops/log";

import { PATH_SCHEDULE_CARD } from "./dto/market/scheduleCard";
import { PATH_SCHEDULE_CARD_ORDER } from "./dto/market/scheduleCardOrder";

import { PATH_WMSS_ROLE } from "./dto/wmss/role";
import { PATH_CABINET } from "./dto/wmss/cabinet";
import { PATH_CABINET_UNIT } from "./dto/wmss/cabinetUnit";
import { PATH_ORDER } from "./dto/wmss/order";
import { PATH_SKU } from "./dto/wmss/sku";
import { PATH_ANALYSIS } from "./dto/wmss/analysis";
import { PATH_BOOK } from "./dto/wmss/book";
import { PATH_INVOICE } from "./dto/wmss/invoice";

import { PATH_CMS_ROLE } from "./dto/cms/role";
import { PATH_CMS_SPU } from "./dto/cms/spu";
import { PATH_CMS_ORDER } from "./dto/cms/order";

export {
	PATH_USER,
	//
	PATH_CORP,
	PATH_CONTACT,
	PATH_WAREHOUSE,
	PATH_CONFIG_CORP,
	PATH_ANNOUNCE,
	//
	PATH_DEVOPS_LOG,
	//
	PATH_SCHEDULE_CARD,
	PATH_SCHEDULE_CARD_ORDER,
	//
	PATH_WMSS_ROLE,
	PATH_CABINET,
	PATH_CABINET_UNIT,
	PATH_ORDER,
	PATH_SKU,
	PATH_ANALYSIS,
	PATH_BOOK,
	PATH_INVOICE,
	//
	PATH_CMS_ROLE,
	PATH_CMS_SPU,
	PATH_CMS_ORDER,
};

// *************************** Function ***************************
// *************************** Function ***************************
// *************************** Function ***************************
// *************************** Function ***************************

import { trimObject } from "./utils/function";
export { trimObject };
