

/** 固定业务错误
 * @BadRequest 400 明显的客户端错误
 * @Unauthorized 401 请求要求用户的身份认证
 * @Forbidden 403 服务器理解请求客户端的请求，但是拒绝执行此请求
 * @NotFound 404 找不到资源
 * @InternalServerError 500 服务器内部错误，无法完成请求
 * @GatewayTimeOut 504 充当网关或代理的服务器，未及时从远端服务器获取请求
 */
export enum ENUM_ERROR_CODE {
    /** 尚未登陆 */
    AUTHORIZED_NONE = 40101,
    /** 当前身份认证已过期 */
    AUTHORIZED_BELOW = 40102,

    /** 权限不足 */
    AUTHORIZATION_BELOW = 40301,
    /** 剩余可用时间已不足 */
    REMAINDER_BELOW = 40302,

    /** 找不到用户 */
    NOT_FOUND_USER = 40401,
    /** 找不到经济主体 */
    NOT_FOUND_BRAND = 40402,
    /** 找不到数据库记录 */
    NOT_FOUND_ENTITY = 40403,

    /** 未知错误 */
    UNKNOWN = 500,
    BUSY_REMOTE_WECHAT = 50401,
    MESS_REMOTE_WECHAT = 50402,
}
