import type { MongodbBase } from "../../utils/database";

/** 白名单：可以访问的访客 */
export type Access = {
    /** @foreign */
    corpId: string;
    phone: string;
} & MongodbBase;
