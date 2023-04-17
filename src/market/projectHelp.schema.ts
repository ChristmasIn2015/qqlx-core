import type { MongodbBase, EnumMapOption } from "qqlx-cdk";
import { ENUM_PROJECT } from "./project.schema";

/** 开发中心：角色 */
export type ProjectHelp = {
    scope: ENUM_PROJECT;

    title: string;
    content: string;
    /** 路径列表 */
    actions: string;
} & MongodbBase;
