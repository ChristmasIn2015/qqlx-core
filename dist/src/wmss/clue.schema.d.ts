import type { MongodbBase } from "qqlx-cdk";
import { ENUM_PROJECT } from "../market/project.schema";
/** 主体中的操作明细 */
export type Clue = {
    /** @foreign */
    corpId: string;
    scope: ENUM_PROJECT;
    content: string;
} & MongodbBase;
