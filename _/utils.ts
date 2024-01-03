// import { Corp } from "../brand/corp.schema";
// import { UserInfo } from "../user/user.dto";

import { VARCHAR255_PG, VARCHAR50_PG } from "./db.pg";

/** JSON字符串 */
export type JSONStr = string;

export type Response<T> = {
    code: number;
    data: T;
    message: string;
};

/** 信息群组（仅用于继承） */
export type _Group = {
    title: VARCHAR50_PG;
    desc: VARCHAR255_PG;
    remark: VARCHAR255_PG;
}