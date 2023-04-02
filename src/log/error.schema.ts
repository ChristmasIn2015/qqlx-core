import { EnumMapOption } from "qqlx-cdk";

/** 固定业务错误
 * @Unauthorized 401 请求要求用户的身份认证
 * @Forbidden 403 服务器理解请求客户端的请求，但是拒绝执行此请求
 * @NotFound 404
 * @InternalServerError 500 服务器内部错误，无法完成请求
 * @GatewayTimeOut 504 充当网关或代理的服务器，未及时从远端服务器获取请求
 */
export enum ENUM_ERROR_CODE {
    UNAUTHORIZED_USER = 40101,

    ROLE_BRAND_BELOW = 40301,
    SCHEDULE_MARKET_BELOW = 40302,

    NOT_FOUND_USER = 40401,
    NOT_FOUND_BRAND = 40402,

    BUSY_REMOTE_WECHAT = 50401,
}

const MAP_ENUM_ERROR_CODE = new Map<ENUM_ERROR_CODE, EnumMapOption>();
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.UNAUTHORIZED_USER, { value: ENUM_ERROR_CODE.UNAUTHORIZED_USER, text: "当前身份认证已过期" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.ROLE_BRAND_BELOW, { value: ENUM_ERROR_CODE.ROLE_BRAND_BELOW, text: "您在单位中的权限不足，请联系单位管理员调整权限" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.SCHEDULE_MARKET_BELOW, { value: ENUM_ERROR_CODE.SCHEDULE_MARKET_BELOW, text: "当前主体已过期" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.NOT_FOUND_USER, { value: ENUM_ERROR_CODE.NOT_FOUND_USER, text: "找不到此用户" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.NOT_FOUND_BRAND, { value: ENUM_ERROR_CODE.NOT_FOUND_BRAND, text: "找不到此主体" });
MAP_ENUM_ERROR_CODE.set(ENUM_ERROR_CODE.BUSY_REMOTE_WECHAT, { value: ENUM_ERROR_CODE.BUSY_REMOTE_WECHAT, text: "微信服务器繁忙，请重新试试" });
export { MAP_ENUM_ERROR_CODE };
