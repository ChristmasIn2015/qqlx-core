
/** 其他系统需要知道服务节点，才能调用对应节点中的服务，比如数据库、日志等
 * @extra 数据库、支付证书等机密配置、需要从文件加载
 */
export type PondNode = {
    name: string

    /** 内网地址 */
    lanIP: string
    path: string
    port: number
}

export type postPondNodeBeatDto = { schema: PondNode }
export type postPondNodeRes = null