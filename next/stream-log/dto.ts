import { Page, PageRes } from "../_/search";
import { StreamLog } from "./schema";

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

export const DROPLET_STREAM_LOG = "stream:log";
export const PATH_STREAM_LOG = "/stream/log";

export type getStreamLogDto<T> = { page: Page<T> };
export type getStreamLogRes = PageRes<StreamLog>;
export type postStreamLogDto = { schema: StreamLog };
export type postStreamLogRes = null;
