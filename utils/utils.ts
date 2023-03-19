import { User } from "../schema/user/user";
import { Corp } from "../schema/brand/corp";

/** 全项目通用：统一返回结构 */
export interface ResponseREST<T> {
    code: string;
    data: T;
    message: string;
    path: string;
    time: number;
}

/** 全项目通用：列表合计 */
export interface Calculation<T> {
    list: T[];
    pounds: number;
    count: number;
    amount: number;
}

/** 全项目通用：http请求必携带的参数 */
export type BaseDTO = {
    chain: string;
    user: User;
    corp: Corp;
};
