/** 全项目统一返回结构 */
export interface ResponseREST<T> {
	code: number;
	data: T;
	message: string;
}
