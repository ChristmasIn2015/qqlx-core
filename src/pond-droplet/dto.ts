import { JSONStr } from "../_/utils";

/** 节点上的服务名称 */
export type DropletName = string;

/** 其他系统需要知道服务节点，才能调用对应节点中的服务，比如数据库、日志等
 * @extra 数据库、支付证书等机密配置、需要从文件加载
 */
export type PondDroplet = {
    name: DropletName;

    /** 内网地址 */
    lan_ip: string;

    /** 内网端口 */
    port: number;

    /** 文件数据 */
    files?: ArrayBuffer[];

    /** 字符数据 */
    text?: string;
};

export const DROPLET_POND_DROPLET = "pond:droplet";
export const PATH_POND_DROPLET = "/pond/droplet";
export type getPondDropletDto = { name: DropletName };
export type getPondDropletRes = { name: DropletName; schema?: PondDroplet };
export type patchPondDropletDto = { name: DropletName; entity: PondDroplet };
export type patchPondDropletRes = null;
