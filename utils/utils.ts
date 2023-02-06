/** 全项目统一返回结构 */
export interface ResponseREST<T> {
	code: string;
	data: T;
	message: string;
	path: string;
	time: number;
}

/** 全项目列表合计 */
export interface Calculation<T> {
	list: T[];
	pounds: number;
	count: number;
	amount: number;
}
