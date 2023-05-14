import type { MongodbBase, EnumMapOption } from "qqlx-cdk";

export enum ENUM_LOG {
    /** 程序已经关闭 */
    OFF,
    /** 重大错误：每个严重的错误事件将会导致应用程序的退出 */
    FATAL,
    /** 错误事件可能仍然允许应用程序继续运行 */
    ERROR,
    /** 指定具有潜在危害的情况 */
    WARN,
    /** 指定能够突出在粗粒度级别的应用程序运行情况的信息的消息 */
    INFO,
    /** 指定细粒度信息事件是最有用的应用程序调试 */
    DEBUG,
    /** 表示业务开始 */
    TRACE,
    /** 表示业务完成 */
    ALL,
}

const MAP_ENUM_LOG = new Map<ENUM_LOG, EnumMapOption>();
MAP_ENUM_LOG.set(ENUM_LOG.OFF, { value: ENUM_LOG.OFF, text: "程序已经关闭" });
MAP_ENUM_LOG.set(ENUM_LOG.FATAL, { value: ENUM_LOG.FATAL, text: "发现错误，程序已退出" });
MAP_ENUM_LOG.set(ENUM_LOG.ERROR, { value: ENUM_LOG.ERROR, text: "发现错误，程序保持运行中" });
MAP_ENUM_LOG.set(ENUM_LOG.WARN, { value: ENUM_LOG.WARN, text: "发现可能的潜在错误" });
MAP_ENUM_LOG.set(ENUM_LOG.INFO, { value: ENUM_LOG.INFO, text: "应用程序运行情况" });
MAP_ENUM_LOG.set(ENUM_LOG.DEBUG, { value: ENUM_LOG.DEBUG, text: "应用程序运行的具体情况" });
MAP_ENUM_LOG.set(ENUM_LOG.TRACE, { value: ENUM_LOG.TRACE, text: "业务开始" });
MAP_ENUM_LOG.set(ENUM_LOG.ALL, { value: ENUM_LOG.ALL, text: "业务完成" });
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
    duration: string;

    /** 内容 */
    json: string;
} & MongodbBase;

export type LogAnalysis = {
    title: string;
    desc: string;

    path: string;
};
