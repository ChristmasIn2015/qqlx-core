// import { Corp } from "../brand/corp.schema";
// import { UserInfo } from "../user/user.dto";

/** JSON字符串 */
export type JSONStr = string;

export type Response<T> = {
    code: number;
    data: T;
    message: string;
};

// /** 全项目通用：http请求必携带的参数 */
// export type UserDTO = {
//     chain: string;
//     userInfo: UserInfo;
// };

// /** WMSS通用：http请求必携带的参数 */
// export type BrandDTO = {
//     chain: string;
//     userInfo: UserInfo;
//     corp: Corp;
// };
