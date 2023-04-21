import type { MongodbBase } from "qqlx-cdk";
import { ENUM_PROJECT } from "./project.schema";
export type IntroGroup = {
    scope: ENUM_PROJECT;
    /** 在哪些路径、优先展示 */
    path: string;
    /** 帮助跳转按钮 */
    actions: string;
} & MongodbBase;
