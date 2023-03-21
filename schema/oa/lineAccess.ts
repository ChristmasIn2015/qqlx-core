import type { MongodbBase } from "../../utils/database";

/** 场景中的白名单 */
export type LineAccess = {
    /** @foreign */
    corpId: string;
    lineId: string;
    accessId: string;
} & MongodbBase;
