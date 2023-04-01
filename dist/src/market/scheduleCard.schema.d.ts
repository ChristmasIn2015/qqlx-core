import type { MongodbBase } from "qqlx-cdk";
import { ENUM_PROJECT } from "./project.schema";
/** 超级管理员 为某个产品 发布时长卡 */
export type ScheduleCard = {
    scope: ENUM_PROJECT;
    title: string;
    desc: string;
    schedule: number;
    amount: number;
    isDisabled: boolean;
} & MongodbBase;
