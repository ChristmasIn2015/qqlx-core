import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
export declare enum ENUM_LOG {
    /** 程序已经关闭 */
    OFF = 0,
    /** 重大错误：每个严重的错误事件将会导致应用程序的退出 */
    FATAL = 1,
    /** 错误事件可能仍然允许应用程序继续运行 */
    ERROR = 2,
    /** 指定具有潜在危害的情况 */
    WARN = 3,
    /** 指定能够突出在粗粒度级别的应用程序运行情况的信息的消息 */
    INFO = 4,
    /** 指定细粒度信息事件是最有用的应用程序调试 */
    DEBUG = 5,
    /** 表示业务开始 */
    TRACE = 6,
    /** 表示业务完成 */
    ALL = 7
}
declare const MAP_ENUM_LOG: Map<ENUM_LOG, EnumMapOption>;
export { MAP_ENUM_LOG };
export type Log = {
    type: ENUM_LOG;
    /** REST路径 */
    path: string;
    /** 追踪链 */
    chain: string;
    /** IP */
    ip: string;
    /** 耗时 */
    duration: number;
    /** 内容 */
    json: string;
} & MongodbBase;
export type LogAnalysis = {
    title: string;
    desc: string;
    path: string;
};
