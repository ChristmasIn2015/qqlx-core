import { EnumMapOption } from "qqlx-cdk";
/** 固定业务错误
 * @Unauthorized 401 请求要求用户的身份认证
 * @Forbidden 403 服务器理解请求客户端的请求，但是拒绝执行此请求
 * @NotFound 404
 * @InternalServerError 500 服务器内部错误，无法完成请求
 * @GatewayTimeOut 504 充当网关或代理的服务器，未及时从远端服务器获取请求
 */
export declare enum ENUM_ERROR_CODE {
    UNAUTHORIZED_USER = 40101,
    ROLE_BRAND_BELOW = 40301,
    SCHEDULE_MARKET_BELOW = 40302,
    NOT_FOUND_USER = 40401,
    NOT_FOUND_BRAND = 40402,
    BUSY_REMOTE_WECHAT = 50401
}
declare const MAP_ENUM_ERROR_CODE: Map<ENUM_ERROR_CODE, EnumMapOption>;
export { MAP_ENUM_ERROR_CODE };
