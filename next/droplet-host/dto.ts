/** 其他系统需要知道服务节点，才能调用对应节点中的服务，比如数据库、日志等
 * @extra 数据库、支付证书等机密配置、需要从文件加载
 * @LAN Local Area Network
 */
export type DropletHost = {
    lan_ip: string;
    port: number;
    remark: string;
};

export const DROPLET_DROPLET_HOST = "droplet:host";
export const PATH_DROPLET_HOST = "/droplet/host";
export type getDropletHostDto = { key: string };
export type getDropletHostRes = DropletHost;
export type patchDropletHostDto = { key: string; schema: DropletHost };
export type patchDropletHostRes = null;
