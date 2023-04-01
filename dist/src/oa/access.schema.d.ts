import type { MongodbBase } from "qqlx-cdk";
/** 白名单 */
export type Access = {
    /** @foreign */
    corpId: string;
    /** 现实中已知的手机号 */
    phone: string;
} & MongodbBase;
