import { PondLog } from "./log.schema";

export enum ENUM_POND_LOG {
    /** 如果出现，说明即将关闭程序 */
    OFF,
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

export type postPondLogDto = { schema: PondLog }
export type postPondLogRes = null