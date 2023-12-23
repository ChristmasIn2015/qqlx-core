import type { PgBaseSchema, BIGINT_PG, VARCHAR_PG, VARCHAR255_PG, SMALLINT_PG } from "../../_/db.pg";

export enum ENUM_STREAM_LOG {
    /** 如果出现，说明即将关闭程序 */
    OFF = 1001,
    /** 重大错误：有概率无法保证应用程序继续运行 */
    FATAL,
    /** 发生已知错误，但是程序一定会继续运行 */
    ERROR,
    /** 发生未知错误，但是程序一定会继续运行 */
    WARN,

    /** 应用程序调试，一般在某些步骤完成时打印 */
    INFO,
    /** 应用程序调试，一般用于打印某些变量的值 */
    DEBUG,

    /** 本系统中表示业务开始 */
    TRACE,
    /** 本系统中表示业务完成 */
    ALL,
}

export type StreamLog = {
    type: ENUM_STREAM_LOG;

    /** 用分号分隔的，多个具有含义的字符串，一般记录来源等没有排序要求的内容
     * @demo IP;追踪链路;REST路径
     */
    title: VARCHAR255_PG;
    text: VARCHAR_PG;
    duration: SMALLINT_PG;
} & PgBaseSchema;
export const RELATIONS_STREAM_LOG = "stream_log";
