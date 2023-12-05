import { JSONStr } from "../_/utils";

/** 节点上的服务名称 */
export type DropetName = string;

/** 其他系统需要知道服务节点，才能调用对应节点中的服务，比如数据库、日志等
 * @extra 数据库、支付证书等机密配置、需要从文件加载
 */
export type PondDropet = {
    name: DropetName;

    /** 内网地址 */
    lan_ip: string;

    /** 内网端口 */
    port: number;

    /** 文件数据 */
    files?: ArrayBuffer[];

    /** 字符数据 */
    text?: string;
};

export const POND_DROPET_NAME = "pond:dropet";
export const POND_DROPET_PATH = "/pond/dropet";
export type getPondDropetDto = { name: DropetName };
export type getPondDropetRes = { name: DropetName; dropet?: PondDropet };
export type patchPondDropetDto = { name: DropetName; dropet: PondDropet };
export type patchPondDropetRes = null;
