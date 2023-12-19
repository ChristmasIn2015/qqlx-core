import type { PgBaseSchema, INTEGER_PG, VARCHAR50_PG, VARCHAR_PG } from "../_/db.pg";
import { UserTelecom, UserWeChat } from "../stream-user/schema";

import { ENUM_STREAM_USER_DROIT } from "./dto";

/** 哪个用户？在哪个任意系统中？有哪些权限？ */
export type StreamUserDroit = {
    uuid: VARCHAR50_PG;
    joinWeChat?: UserWeChat;
    joinTelecom?: UserTelecom;

    /** 资源范围，需要通过 “表名:资源Id” 进行手动拼接
     * @exp 蓝图系统的节点 = draft:node:root:1001
     * @exp 运营系统的素材 = corp:1001:impact:media
     * @exp 销售系统的销售订单 = corp:1001:wmss:sale
     * @exp 采购、加工、库存、物流、售后、财务...
     */
    scope: VARCHAR50_PG;

    /** 资源作用域中的权限明细 */
    content: ENUM_STREAM_USER_DROIT;
} & PgBaseSchema;
export const RELATIONS_STREAM_USER_DROIT = "stream_user_droit";
