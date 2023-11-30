
import { JSONStr, NodeServiceName, NodeServicePath } from "../_/communication"

/** 其他系统需要知道服务节点，才能调用对应节点中的服务，比如数据库、日志等
 * @extra 数据库、支付证书等机密配置、需要从文件加载
 */
export type PondNode = {
    name: NodeServiceName

    /** 内网地址 */
    lan_ip: string
    port: number

    /** 文件数据 */
    files?: ArrayBuffer[]

    /** 字符数据 */
    text?: string
}

export const POND_NODE_CONFIG_PATH: NodeServicePath = "/pond/node/config"
export type getPondNodeConfigDto = Record<"keyword", string>
export type getPondNodeConfigRes = { key: string, value?: JSONStr }
export type patchPondNodeConfigDto = { key: string, value: JSONStr }
export type patchPondNodeConfigRes = null


export const POND_NODE_SERVICE_PATH: NodeServicePath = "/pond/node/service"
export type getPondNodeServiceDto = Record<"keyword", NodeServiceName>
export type getPondNodeServiceRes = { key: NodeServiceName, node?: PondNode }
export type patchPondNodeServiceDto = { key: NodeServiceName, node: PondNode }
export type patchPondNodeServiceRes = null