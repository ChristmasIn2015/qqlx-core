/** 全项目统一返回结构 */
export interface ResponseREST<T> {
	code: number;
	data: T;
	message: string;
}

/** 实体合计 */
export type Calculation<T> = {
	list: T[];
	pounds: number;
	count: number;
	amount: number;
};
