/** 国内市场主体类型 */
export const enum SubjectType {
	/** 无 */
	NONE = 1,
	/** 个体户 */
	STUDIO = 2,
	/** 公司 */
	COMPANY = 3,
	/** 子公司 */
	SUB_COMPANY = 4,
}

/** 某个用户在某个市场主体中的员工角色 */
export const enum SubjectRole {
	/** wms-steel 无 */
	NONE = 1000,
	/** wms-steel 管理员 */
	MANAGER = 1001,
	/** wms-steel 采购 */
	PURCHASE = 1002,
	/** wms-steel 仓库管理员 */
	WAREHOUSE_MANAGEMENT = 1003,
	/** wms-steel 销售 */
	SALES = 1004,
	/** wms-steel 财务 */
	FINANCE = 1005,
}
