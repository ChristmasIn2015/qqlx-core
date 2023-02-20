import type { MongodbBase } from "../../utils/database";

export type RoleWMSS = {
	/** @foreign */
	userId: string;
	/** @foreign */
	corpId: string;

	role: ENUM_ROLE_WMSS;
} & MongodbBase;

export const enum ENUM_ROLE_WMSS {
	/** 基础职位，没有高级业务权限 */
	BASE = 1000,

	/** 管理员 */
	ROOT = 1001,

	/** 采购主管 */
	PURCHASE = 2000,

	/** 销售主管 */
	SALES = 3000,

	/** 仓库：主管 */
	WM = 4000,
	/** 仓管：入库员 */
	WM_GETIN = 4001,
	/** 仓管：生产员 */
	WM_PROCESS = 4002,
	/** 仓管：发货员 */
	WM_GETOUT = 4003,
	/** 仓管：领料员 */
	WM_MATERIAL = 4003,

	/** 财务主管 */
	FINANCE = 5000,
	/** 财务：出纳 */
	FINANCE_CHUNA = 5001,
	/** 财务：发票专员 */
	FINANCE_FAPIAO = 5002,
}
export const MAP_ENUM_ROLE_WMSS = [
	{ key: "", value: ENUM_ROLE_WMSS.BASE, text: "基础职位" },
	{ key: "", value: ENUM_ROLE_WMSS.ROOT, text: "管理员" },
	{ key: "", value: ENUM_ROLE_WMSS.PURCHASE, text: "采购（全权限）" },
	{ key: "", value: ENUM_ROLE_WMSS.SALES, text: "销售（全权限）" },
	{ key: "", value: ENUM_ROLE_WMSS.WM, text: "仓储（全权限）" },
	{ key: "", value: ENUM_ROLE_WMSS.WM_GETIN, text: "仓储入库" },
	{ key: "", value: ENUM_ROLE_WMSS.WM_PROCESS, text: "生产员" },
	{ key: "", value: ENUM_ROLE_WMSS.WM_GETOUT, text: "仓储发货" },
	{ key: "", value: ENUM_ROLE_WMSS.WM_MATERIAL, text: "领料员" },
	{ key: "", value: ENUM_ROLE_WMSS.FINANCE, text: "财务（全权限）" },
	{ key: "", value: ENUM_ROLE_WMSS.FINANCE_CHUNA, text: "出纳" },
	{ key: "", value: ENUM_ROLE_WMSS.FINANCE_FAPIAO, text: "发票专员" },
];
